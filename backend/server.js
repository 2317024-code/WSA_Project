const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/musicapp';

let mongoConnected = false;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected to', MONGO_URI);
    mongoConnected = true;
  })
  .catch((err) => {
    console.warn('⚠️ MongoDB connection failed, falling back to in-memory data.');
    console.warn(err.message);
  });

// Load Mongoose models
let SongModel = null;
let UserModel = null;
try {
  SongModel = require('./models/Song');
  UserModel = require('./models/User');
} catch (e) {
  // models might not be available in some environments
}

// In-memory mock data (used if MongoDB not available)
const songs = [
  {
    id: '1',
    name: 'Believer',
    artist_name: 'Imagine Dragons',
    releasedate: '2017',
    duration: '3:24',
    cover: '/assets/logo.png',
  },
  {
    id: '2',
    name: 'Faded',
    artist_name: 'Alan Walker',
    releasedate: '2015',
    duration: '3:32',
    cover: '/assets/logo.png',
  },
  {
    id: '3',
    name: 'Shape of You',
    artist_name: 'Ed Sheeran',
    releasedate: '2017',
    duration: '3:53',
    cover: '/assets/logo.png',
  },
];

// Simple routes
app.get('/', (req, res) => {
  res.send('Static-frontend backend is running');
});

app.get('/api/songs', async (req, res) => {
  try {
    if (mongoConnected && SongModel) {
      const docs = await SongModel.find().sort({ createdAt: -1 }).lean();
      return res.json(docs);
    }
    return res.json(songs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.post('/api/songs', async (req, res) => {
  try {
    const payload = req.body;
    if (mongoConnected && SongModel) {
      const created = await SongModel.create(payload);
      return res.status(201).json(created);
    }
    const song = { ...payload, id: Date.now().toString() };
    songs.push(song);
    return res.status(201).json(song);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create song' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    if (mongoConnected && UserModel) {
      const users = await UserModel.find().lean();
      return res.json(users);
    }
    return res.json([{ id: '1', name: 'Demo User', email: 'demo@example.com' }]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email } = req.body;
    // In a real app you'd validate credentials. Here we return a demo token.
    return res.json({ success: true, token: 'demo-token', user: { id: '1', name: 'Demo User', email } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (mongoConnected && UserModel) {
      const created = await UserModel.create({ name, email });
      return res.status(201).json({ success: true, user: created });
    }
    return res.status(201).json({ success: true, user: { id: Date.now().toString(), name, email } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Signup failed' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
  console.log('API endpoints: GET /api/songs, POST /api/songs, GET /api/users, POST /api/auth/login, POST /api/auth/signup');
});
