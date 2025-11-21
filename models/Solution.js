const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  question: String,
  solutionText: String,
  imageUrl: String, // or [String] for multiple images
  tags: [String],   // optional: for filtering
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Solution', solutionSchema);