const express = require('express');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

// POST /contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.json({ status: 'success', message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});
// GET /contact/testimonials
router.get('/testimonials', async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(messages);
});
module.exports = router;