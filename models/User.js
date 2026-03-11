const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  profileName: {
    type: String,
    required: true
  },
  skinTone: {
    type: Object,
    default: null
  },
  recommendations: {
    type: Object,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  profiles: [profileSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
