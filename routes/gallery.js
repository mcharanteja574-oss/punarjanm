const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const GalleryItem = require('../models/GalleryItem');

// GET all gallery items
router.get('/', async (req, res) => {
  try {
    const items = await GalleryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
});

// POST new gallery item

router.post('/upload-image', upload.single('image'), async (req, res) => {
  const { title, description, contributor, tags } = req.body;
  const imageUrl = `/images/${req.file.filename}`;

  if (!title || !imageUrl || !contributor) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newItem = new GalleryItem({ title, description, imageUrl, contributor, tags: tags?.split(',') });
  await newItem.save();
  res.status(201).json({ message: 'Image uploaded successfully', item: newItem });
});

module.exports = router;