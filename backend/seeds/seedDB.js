const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Song = require('../models/Song');
const User = require('../models/User');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/musicapp';

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Load sample data
    const sampleDataPath = path.join(__dirname, 'sampleData.json');
    const sampleData = JSON.parse(fs.readFileSync(sampleDataPath, 'utf8'));

    // Clear existing data
    await Song.deleteMany({});
    await User.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample songs
    await Song.insertMany(sampleData.songs);
    console.log(`✅ Inserted ${sampleData.songs.length} songs`);

    // Insert sample users
    await User.insertMany(sampleData.users);
    console.log(`✅ Inserted ${sampleData.users.length} users`);

    console.log('🎉 Database seeded successfully!');
    await mongoose.disconnect();
    console.log('📴 Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();
