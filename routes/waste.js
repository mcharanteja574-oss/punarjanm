const express = require('express');
const WasteLog = require('../models/WasteLog');

const router = express.Router();

// POST /waste
router.post('/', async (req, res) => {
  try {
    const { type, weightKg, source, transformedInto } = req.body;
    const log = new WasteLog({ type, weightKg, source, transformedInto });
    await log.save();
    res.json({ status: 'success', log });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// GET /waste
router.get('/', async (req, res) => {
  const logs = await WasteLog.find().sort({ date: -1 });
  res.json(logs);
});

module.exports = router;