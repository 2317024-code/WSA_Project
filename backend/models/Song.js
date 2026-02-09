const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist_name: { type: String, required: true },
  releasedate: { type: String },
  duration: { type: String },
  cover: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Song', SongSchema);
