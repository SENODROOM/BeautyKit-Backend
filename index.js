require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const connectDB = require('./config/database');
const User = require('./models/User');
const data = require('./data/data');

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'beaukit-secret-key-2024';

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ── Auth Middleware ──
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    req.userEmail = decoded.email;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// ── SIGN UP ──
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
    
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ error: 'Email already registered' });
    
    const passwordHash = await bcrypt.hash(password, 10);
    const id = uuidv4();
    
    const user = new User({
      id,
      name,
      email,
      passwordHash,
      profiles: []
    });
    
    await user.save();
    const token = jwt.sign({ userId: id, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id, name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── SIGN IN ──
app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'Invalid email or password' });
    const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET ME ──
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ id: user.id, name: user.name, email: user.email, profileCount: user.profiles.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET ALL PROFILES ──
app.get('/api/profiles', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user.profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── SAVE PROFILE ──
app.post('/api/profiles', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    const { profileName, skinTone, recommendations, avatar } = req.body;
    if (!profileName) return res.status(400).json({ error: 'Profile name required' });
    
    const profile = {
      id: uuidv4(),
      profileName,
      skinTone,
      recommendations,
      avatar: avatar || null,
      createdAt: new Date()
    };
    
    user.profiles.push(profile);
    await user.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── DELETE PROFILE ──
app.delete('/api/profiles/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.userEmail });
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    const idx = user.profiles.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Profile not found' });
    
    user.profiles.splice(idx, 1);
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── SKIN ANALYSIS ──
function analyzeSkinTone(r, g, b) {
  const warmth = (r - b) / 255;
  const greenBal = g / (r + g + b + 1);
  let undertone = warmth > 0.15 && greenBal < 0.36 ? 'warm' : warmth < 0.05 ? 'cool' : 'neutral';
  const brightness = (r + g + b) / 3;
  let depth = brightness > 200 ? 'light' : brightness > 165 ? 'light-medium' : brightness > 125 ? 'medium' : brightness > 85 ? 'medium-deep' : 'deep';
  return { undertone, depth, brightness };
}

function getRecommendations(undertone, depth) {
  return data[undertone] || data.neutral;
}

app.post('/api/analyze-pixels', (req, res) => {
  try {
    const { r, g, b } = req.body;
    if (r === undefined || g === undefined || b === undefined) return res.status(400).json({ error: 'RGB values required' });
    const { undertone, depth } = analyzeSkinTone(r, g, b);
    const recommendations = getRecommendations(undertone, depth);
    const toneNames = {
      'light-warm': 'Porcelain Warm', 'light-medium-warm': 'Fair Warm', 'medium-warm': 'Golden Beige',
      'medium-deep-warm': 'Warm Bronze', 'deep-warm': 'Deep Mahogany', 'light-cool': 'Porcelain Cool',
      'light-medium-cool': 'Fair Cool', 'medium-cool': 'Cool Beige', 'medium-deep-cool': 'Cool Tan',
      'deep-cool': 'Deep Ebony', 'light-neutral': 'Porcelain', 'light-medium-neutral': 'Fair Neutral',
      'medium-neutral': 'Natural Beige', 'medium-deep-neutral': 'Neutral Tan', 'deep-neutral': 'Rich Espresso'
    };
    const toneName = toneNames[`${depth}-${undertone}`] || `${depth} ${undertone}`;
    res.json({
      skinTone: { name: toneName, undertone, depth, rgb: { r, g, b }, hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}` },
      recommendations
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'BeauKit API v2 Running' }));

app.listen(PORT, () => console.log(`✨ BeauKit API running on http://localhost:${PORT}`));
