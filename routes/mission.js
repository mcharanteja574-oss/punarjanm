const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Punarjanm Mission</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #fffaf0;
          padding: 2rem;
          color: #2c3e50;
        }
        h1 {
          color: #8e44ad;
        }
        .mission {
          margin-top: 2rem;
          line-height: 1.6;
          max-width: 700px;
        }
        blockquote {
          font-style: italic;
          color: #555;
          border-left: 4px solid #8e44ad;
          padding-left: 1rem;
          margin: 1rem 0;
        }
      </style>
    </head>
    <body>
      <h1>🌸 Our Mission</h1>
      <div class="mission">
        <p>Punarjanm is a celebration of rebirth—of ideas, of communities, of hope. We believe in empowering artisans, laborers, and storytellers through technology, empathy, and collaboration.</p>
        <blockquote>"Let every thread, every word, every image carry the spirit of renewal."</blockquote>
        <p>Our platform is built to be inclusive, multilingual, and emotionally resonant. We aim to bridge tradition and innovation, making every visitor feel seen, heard, and inspired.</p>
        <p>Whether you're a creator, a learner, or a dreamer—Punarjanm is your space to grow, connect, and shine.</p>
      </div>
    </body>
    </html>
  `);
});

module.exports = router;