const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');

router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.json([]);

  // Break query into keywords
  const keywords = query.toLowerCase().split(/\s+/).map(word => new RegExp(word, 'i'));

  try {
    const results = await Solution.find({
      $or: [
        { title: { $in: keywords } },
        { description: { $in: keywords } },
        { tags: { $in: keywords } }
      ]
    });

    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;