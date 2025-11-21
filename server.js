require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

// Sample route
app.get('/', (req, res) => {
  res.send('🌱 Welcome to the Punarjanm backend!');
});

// Modular routes
const galleryRoutes = require('./routes/gallery');
const contactRoutes = require('./routes/contact');
const missionRoutes = require('./routes/mission');
const teamRoutes = require('./routes/team');
const wasteRoutes = require('./routes/waste');
const solutionsRoutes = require('./routes/solutions');

app.use('/gallery', galleryRoutes);
app.use('/contact', contactRoutes);
app.use('/mission', missionRoutes);
app.use('/team', teamRoutes);
app.use('/waste', wasteRoutes);
app.use('/solutions', solutionsRoutes);

// Catch-all
app.use((req, res) => {
  res.status(404).send('❓ Route not found');
});

// MongoDB
console.log('🔍 MONGO_URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});