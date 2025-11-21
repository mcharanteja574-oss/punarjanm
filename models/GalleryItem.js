const mongoose = require('mongoose');

const galleryItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  contributor: String,
  tags: [String]
});

module.exports = mongoose.model('GalleryItem', galleryItemSchema);