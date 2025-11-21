const mongoose = require('mongoose');

const wasteLogSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Plastic', 'Organic', 'E-waste', 'Textile'],
    required: true
  },
  weightKg: {
    type: Number,
    required: true
  },
  source: String, // e.g. "Kukatpally Market"
  transformedInto: String, // e.g. "Eco-bricks", "Compost", "Art installation"
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WasteLog', wasteLogSchema);