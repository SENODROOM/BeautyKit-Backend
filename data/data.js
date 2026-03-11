const data = {
    warm: {
      jewelry: {
        metals: [
          { name: 'Yellow Gold', hex: '#FFD700', rating: 5, note: 'Perfect — radiates with warm skin' },
          { name: 'Rose Gold', hex: '#B76E79', rating: 4, note: 'Soft warmth, very flattering' },
          { name: 'Copper', hex: '#B87333', rating: 4, note: 'Earthy and elegant' },
          { name: 'Bronze', hex: '#CD7F32', rating: 3, note: 'Bold bohemian vibe' },
          { name: 'Brass', hex: '#B5A642', rating: 3, note: 'Vintage and unique' },
          { name: 'Gold-filled', hex: '#DAA520', rating: 5, note: 'Affordable gold alternative' }
        ],
        styles: ['Chunky gold chains', 'Layered pendant necklaces', 'Hoop earrings', 'Stacked bangles', 'Tribal-inspired pieces', 'Hammered gold cuffs', 'Coin pendants', 'Vintage cameo brooches'],
        gemstones: ['Amber', 'Citrine', 'Carnelian', 'Coral', 'Topaz', 'Garnet', 'Tiger\'s Eye', 'Ruby'],
        avoid: ['Silver', 'White Gold', 'Platinum']
      },
      clothing: {
        colors: [
          { name: 'Terracotta', hex: '#C65D3C', category: 'Earth' },
          { name: 'Warm Camel', hex: '#C19A6B', category: 'Neutral' },
          { name: 'Olive Green', hex: '#808000', category: 'Earth' },
          { name: 'Rust Orange', hex: '#B7410E', category: 'Warm' },
          { name: 'Cream', hex: '#FFFDD0', category: 'Neutral' },
          { name: 'Warm Brown', hex: '#8B4513', category: 'Earth' },
          { name: 'Golden Yellow', hex: '#FFD700', category: 'Warm' },
          { name: 'Coral', hex: '#FF6B5B', category: 'Warm' },
          { name: 'Burnt Sienna', hex: '#E97451', category: 'Earth' },
          { name: 'Mustard', hex: '#FFDB58', category: 'Warm' },
          { name: 'Peach', hex: '#FFCBA4', category: 'Warm' },
          { name: 'Forest Green', hex: '#228B22', category: 'Earth' },
          { name: 'Warm Beige', hex: '#F5F0E8', category: 'Neutral' },
          { name: 'Copper Rose', hex: '#CB6D51', category: 'Warm' },
          { name: 'Sage', hex: '#87AE73', category: 'Earth' },
          { name: 'Warm Red', hex: '#CC2200', category: 'Bold' }
        ],
        styles: ['Bohemian / Boho', 'Earthy Minimalist', 'Warm Contemporary', 'Mediterranean', 'Desert Luxe', 'Golden Hour Aesthetic', 'Afrocentric Prints', 'Vintage 70s'],
        fabrics: ['Linen', 'Cotton', 'Suede', 'Leather', 'Silk Satin', 'Velvet in warm tones'],
        patterns: ['Tribal prints', 'Floral in warm hues', 'Abstract earth tones', 'Animal print', 'Paisley', 'Batik'],
        avoid: ['Icy blue', 'Cool grey', 'Pure white', 'Lavender', 'Cool mint']
      },
      lipstick: [
        { name: 'Warm Coral', hex: '#FF6B5B', finish: 'Gloss', vibe: 'Playful' },
        { name: 'Peachy Nude', hex: '#FFAB91', finish: 'Matte', vibe: 'Natural' },
        { name: 'Terracotta Red', hex: '#C05A3A', finish: 'Satin', vibe: 'Earthy' },
        { name: 'Brick Rose', hex: '#C45C75', finish: 'Matte', vibe: 'Romantic' },
        { name: 'Warm Berry', hex: '#8B3A5A', finish: 'Velvet', vibe: 'Bold' },
        { name: 'Papaya', hex: '#FF9A6C', finish: 'Gloss', vibe: 'Fresh' },
        { name: 'Cinnamon', hex: '#8B4010', finish: 'Matte', vibe: 'Sultry' },
        { name: 'Golden Brown', hex: '#996633', finish: 'Satin', vibe: 'Editorial' }
      ],
      blush: [
        { name: 'Peach Glow', hex: '#FFCBA4', finish: 'Shimmer' },
        { name: 'Warm Apricot', hex: '#FFB347', finish: 'Matte' },
        { name: 'Coral Flush', hex: '#FF7F50', finish: 'Satin' },
        { name: 'Golden Rose', hex: '#FF91A4', finish: 'Glow' },
        { name: 'Sun-Kissed', hex: '#E8956D', finish: 'Bronzy' },
        { name: 'Warm Honey', hex: '#F4A460', finish: 'Shimmer' }
      ],
      eyeshadow: [
        { name: 'Warm Bronze', hex: '#CD7F32' },
        { name: 'Copper Shimmer', hex: '#B87333' },
        { name: 'Burnt Sienna', hex: '#E97451' },
        { name: 'Golden Taupe', hex: '#8B7355' },
        { name: 'Rich Brown', hex: '#5C4033' },
        { name: 'Champagne', hex: '#F7E7CE' },
        { name: 'Rust', hex: '#B7410E' },
        { name: 'Amber', hex: '#FFBF00' }
      ],
      hair: {
        colors: [
          { name: 'Golden Blonde', hex: '#E8D5B7', level: 'Light' },
          { name: 'Honey Brown', hex: '#C4922A', level: 'Medium' },
          { name: 'Warm Auburn', hex: '#922B21', level: 'Medium-Dark' },
          { name: 'Rich Caramel', hex: '#D2691E', level: 'Medium' },
          { name: 'Copper Red', hex: '#B87333', level: 'Medium' },
          { name: 'Chocolate Brown', hex: '#5C3317', level: 'Dark' },
          { name: 'Warm Black', hex: '#1C0A00', level: 'Darkest' },
          { name: 'Strawberry Blonde', hex: '#E8B4A0', level: 'Light' },
          { name: 'Chestnut', hex: '#8B4513', level: 'Medium-Dark' }
        ],
        styles: ['Beachy waves', 'Loose curls', 'Bohemian braids', 'Textured lob', 'Voluminous blowout'],
        treatments: ['Balayage', 'Highlights', 'Ombre', 'Gloss treatment'],
        avoid: 'Ash blonde, cool platinum, blue-black, silver tones'
      }
    },
    cool: {
      jewelry: {
        metals: [
          { name: 'Sterling Silver', hex: '#C0C0C0', rating: 5, note: 'Classic — makes skin luminous' },
          { name: 'White Gold', hex: '#E8E8E8', rating: 5, note: 'Luxurious and elegant' },
          { name: 'Platinum', hex: '#E5E4E2', rating: 4, note: 'Ultra-premium cool metal' },
          { name: 'Rhodium', hex: '#D0D0D0', rating: 4, note: 'High-shine, very modern' },
          { name: 'Pewter', hex: '#96A8A1', rating: 3, note: 'Understated and artsy' },
          { name: 'Gunmetal', hex: '#2C3539', rating: 3, note: 'Edgy and cool' }
        ],
        styles: ['Delicate silver chains', 'Geometric earrings', 'Art deco pieces', 'Minimalist studs', 'Crystal-encrusted bands', 'Modern sculptural rings', 'Long drop earrings', 'Layered fine chains'],
        gemstones: ['Diamond', 'Sapphire', 'Amethyst', 'Aquamarine', 'Moonstone', 'Blue Topaz', 'Tanzanite', 'Pearl'],
        avoid: ['Yellow Gold', 'Copper', 'Bronze', 'Brass']
      },
      clothing: {
        colors: [
          { name: 'Icy Lavender', hex: '#B39DDB', category: 'Cool' },
          { name: 'Navy Blue', hex: '#283593', category: 'Classic' },
          { name: 'Emerald Green', hex: '#00695C', category: 'Bold' },
          { name: 'Rose Pink', hex: '#E91E63', category: 'Warm-Cool' },
          { name: 'True White', hex: '#FFFFFF', category: 'Neutral' },
          { name: 'Charcoal', hex: '#37474F', category: 'Classic' },
          { name: 'Ice Blue', hex: '#87CEEB', category: 'Cool' },
          { name: 'Fuchsia', hex: '#FF00FF', category: 'Bold' },
          { name: 'Cool Gray', hex: '#9E9E9E', category: 'Neutral' },
          { name: 'Royal Blue', hex: '#4169E1', category: 'Bold' },
          { name: 'Dusty Lilac', hex: '#DCC8E8', category: 'Soft' },
          { name: 'Jade', hex: '#00A86B', category: 'Bold' },
          { name: 'Cool Blush', hex: '#FFB6C1', category: 'Soft' },
          { name: 'Plum', hex: '#8E4585', category: 'Bold' },
          { name: 'Cool Mint', hex: '#98FF98', category: 'Fresh' },
          { name: 'Berry', hex: '#8B0057', category: 'Deep' }
        ],
        styles: ['Modern Minimalist', 'Monochrome Cool', 'Scandinavian', 'Sharp Tailored', 'Cool-Girl Aesthetic', 'Art Deco Inspired', 'Urban Chic', 'Classic Preppy'],
        fabrics: ['Silk', 'Cotton poplin', 'Crisp linen', 'Cashmere', 'Structured crepe', 'Chiffon'],
        patterns: ['Clean geometric', 'Houndstooth', 'Plaid', 'Watercolor florals', 'Abstract cool tones', 'Stripes'],
        avoid: ['Orange', 'Yellow-green', 'Warm brown', 'Rust', 'Mustard']
      },
      lipstick: [
        { name: 'Cool Berry', hex: '#8B008B', finish: 'Velvet', vibe: 'Bold' },
        { name: 'Blue Mauve', hex: '#E0B0FF', finish: 'Gloss', vibe: 'Ethereal' },
        { name: 'True Red', hex: '#CC0000', finish: 'Matte', vibe: 'Classic' },
        { name: 'Dusty Rose', hex: '#D4909A', finish: 'Satin', vibe: 'Romantic' },
        { name: 'Deep Plum', hex: '#4A0030', finish: 'Matte', vibe: 'Sultry' },
        { name: 'Raspberry', hex: '#E30B5D', finish: 'Gloss', vibe: 'Vibrant' },
        { name: 'Cool Pink', hex: '#FF69B4', finish: 'Gloss', vibe: 'Playful' },
        { name: 'Burgundy', hex: '#800020', finish: 'Velvet', vibe: 'Dramatic' }
      ],
      blush: [
        { name: 'Cool Pink', hex: '#FFB6C1', finish: 'Shimmer' },
        { name: 'Berry Flush', hex: '#DDA0DD', finish: 'Matte' },
        { name: 'Rose Mauve', hex: '#C9A0DC', finish: 'Satin' },
        { name: 'Soft Lilac', hex: '#E8B4B8', finish: 'Glow' },
        { name: 'Plum Dust', hex: '#B57EA0', finish: 'Matte' },
        { name: 'Icy Pink', hex: '#FFC0CB', finish: 'Pearl' }
      ],
      eyeshadow: [
        { name: 'Smoky Charcoal', hex: '#36454F' },
        { name: 'Navy', hex: '#283593' },
        { name: 'Cool Mauve', hex: '#967BB6' },
        { name: 'Icy Pink', hex: '#FFB6C1' },
        { name: 'Silver Chrome', hex: '#C0C0C0' },
        { name: 'Deep Purple', hex: '#4B0082' },
        { name: 'Steel Blue', hex: '#4682B4' },
        { name: 'Pale Gold', hex: '#EEE8AA' }
      ],
      hair: {
        colors: [
          { name: 'Ash Blonde', hex: '#E5D3B3', level: 'Light' },
          { name: 'Platinum', hex: '#E8E8E8', level: 'Lightest' },
          { name: 'Cool Brown', hex: '#4E4040', level: 'Dark' },
          { name: 'Blue-Black', hex: '#0D0D0D', level: 'Darkest' },
          { name: 'Burgundy', hex: '#800020', level: 'Dark' },
          { name: 'Ash Brown', hex: '#8B8680', level: 'Medium' },
          { name: 'Cool Black', hex: '#1A1A2E', level: 'Darkest' },
          { name: 'Ice Blonde', hex: '#F5F5DC', level: 'Lightest' },
          { name: 'Violet Brown', hex: '#5C3A5C', level: 'Dark' }
        ],
        styles: ['Sleek straight', 'Sharp bob', 'Blunt cut', 'Icy highlights', 'Smooth blowout'],
        treatments: ['Toning', 'Gloss', 'Ash highlights', 'Cool balayage'],
        avoid: 'Golden blonde, warm auburn, copper, orange tones'
      }
    },
    neutral: {
      jewelry: {
        metals: [
          { name: 'Rose Gold', hex: '#B76E79', rating: 5, note: 'Perfect balance of warm & cool' },
          { name: 'Yellow Gold', hex: '#FFD700', rating: 4, note: 'Warm brightness' },
          { name: 'Silver', hex: '#C0C0C0', rating: 4, note: 'Clean and versatile' },
          { name: 'Mixed Metal', hex: '#C0A080', rating: 5, note: 'Mix freely — you can!' },
          { name: 'Gold-fill', hex: '#DAA520', rating: 4, note: 'Everyday luxury' },
          { name: 'Brushed Gold', hex: '#C8A951', rating: 4, note: 'Matte warmth' }
        ],
        styles: ['Mixed metal layering', 'Delicate stacking rings', 'Statement pendants', 'Huggie hoops', 'Versatile chains', 'Pearl drops', 'Signet rings', 'Charm bracelets'],
        gemstones: ['Rose Quartz', 'Morganite', 'Green Tourmaline', 'Opal', 'Alexandrite', 'Pink Sapphire', 'Labradorite'],
        avoid: 'Nothing — neutral tones are the most versatile!'
      },
      clothing: {
        colors: [
          { name: 'Dusty Rose', hex: '#D4A5A5', category: 'Soft' },
          { name: 'Sage Green', hex: '#8FBC8F', category: 'Earth' },
          { name: 'Soft Navy', hex: '#1F3A5F', category: 'Classic' },
          { name: 'Warm Gray', hex: '#9E9E9E', category: 'Neutral' },
          { name: 'Blush', hex: '#FFB6C1', category: 'Soft' },
          { name: 'Teal', hex: '#008080', category: 'Bold' },
          { name: 'Muted Mauve', hex: '#A07080', category: 'Soft' },
          { name: 'Warm Ivory', hex: '#FFFFF0', category: 'Neutral' },
          { name: 'Soft Camel', hex: '#C19A6B', category: 'Neutral' },
          { name: 'Dusty Blue', hex: '#788DB4', category: 'Cool-Soft' },
          { name: 'Lilac', hex: '#C8A2C8', category: 'Soft' },
          { name: 'Soft Olive', hex: '#A8A87A', category: 'Earth' },
          { name: 'Rose Taupe', hex: '#8B7D7B', category: 'Neutral' },
          { name: 'Periwinkle', hex: '#CCCCFF', category: 'Cool-Soft' },
          { name: 'Soft Terracotta', hex: '#CB8B6A', category: 'Warm' },
          { name: 'Berry Mist', hex: '#9B6B9B', category: 'Soft' }
        ],
        styles: ['Soft Romantic', 'Effortless Chic', 'Modern Classic', 'Neutral Luxe', 'Quiet Luxury', 'Soft Power Dressing', 'Transitional Seasons', 'Versatile Capsule Wardrobe'],
        fabrics: ['Soft jersey', 'Modal', 'Silk', 'Cotton blend', 'Cashmere', 'Lightweight wool'],
        patterns: ['Soft florals', 'Subtle checks', 'Watercolor prints', 'Tonal texture', 'Delicate stripe'],
        avoid: 'Neon colors, very saturated extremes in either direction'
      },
      lipstick: [
        { name: 'Rosy Nude', hex: '#C68642', finish: 'Satin', vibe: 'Natural' },
        { name: 'Soft Mauve', hex: '#D8A0A0', finish: 'Matte', vibe: 'Everyday' },
        { name: 'Blush Pink', hex: '#FFB6C1', finish: 'Gloss', vibe: 'Fresh' },
        { name: 'Medium Rose', hex: '#C06080', finish: 'Velvet', vibe: 'Romantic' },
        { name: 'Soft Berry', hex: '#8B4560', finish: 'Satin', vibe: 'Evening' },
        { name: 'Warm Nude', hex: '#D2906A', finish: 'Matte', vibe: 'Classic' },
        { name: 'Sheer Cherry', hex: '#DC143C', finish: 'Gloss', vibe: 'Playful' },
        { name: 'Mocha', hex: '#7B4F3A', finish: 'Matte', vibe: 'Editorial' }
      ],
      blush: [
        { name: 'Soft Rose', hex: '#FFB6C1', finish: 'Shimmer' },
        { name: 'Neutral Pink', hex: '#D8A0B0', finish: 'Matte' },
        { name: 'Dusty Mauve', hex: '#BC8F8F', finish: 'Satin' },
        { name: 'Sheer Berry', hex: '#C8A0B8', finish: 'Glow' },
        { name: 'Rosewood', hex: '#A05070', finish: 'Matte' },
        { name: 'Petal', hex: '#E8C4C8', finish: 'Pearl' }
      ],
      eyeshadow: [
        { name: 'Warm Taupe', hex: '#8B7355' },
        { name: 'Dusty Rose', hex: '#D8A0A0' },
        { name: 'Soft Brown', hex: '#6B4226' },
        { name: 'Muted Plum', hex: '#7B5B8A' },
        { name: 'Champagne', hex: '#F7E7CE' },
        { name: 'Rosy Mauve', hex: '#C09080' },
        { name: 'Soft Gray', hex: '#9E9E9E' },
        { name: 'Blush Pearl', hex: '#F0D0D0' }
      ],
      hair: {
        colors: [
          { name: 'Medium Brown', hex: '#8B6914', level: 'Medium' },
          { name: 'Dark Blonde', hex: '#C9A84C', level: 'Medium-Light' },
          { name: 'Warm Brunette', hex: '#5C3A1E', level: 'Dark' },
          { name: 'Chestnut', hex: '#8B4513', level: 'Medium-Dark' },
          { name: 'Soft Black', hex: '#1C1C1C', level: 'Darkest' },
          { name: 'Mocha', hex: '#6B3A2A', level: 'Dark' },
          { name: 'Toffee', hex: '#A0522D', level: 'Medium' },
          { name: 'Cool-Warm Brown', hex: '#704214', level: 'Dark' },
          { name: 'Sun-Kissed Brunette', hex: '#7A5C2E', level: 'Medium' }
        ],
        styles: ['Soft waves', 'Textured layers', 'Balayage lob', 'Natural texture', 'Versatile length'],
        treatments: ['Balayage', 'Gloss', 'Color melt', 'Tonal highlights'],
        avoid: 'Very extreme warm OR very ashy — keep it balanced'
      }
    }
  };
  
  export default data;