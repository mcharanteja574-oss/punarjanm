const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Punarjanm Team</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #eef6f9;
          padding: 2rem;
          color: #333;
        }
        h1 {
          color: #34495e;
        }
        .team {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        .member {
          background: white;
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 8px;
          width: 220px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .role {
          font-style: italic;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>🤝 Meet the Punarjanm Team</h1>
      <p>Each member brings heart, skill, and vision to our mission.</p>
      <div class="team">
        <div class="member">
          <h3>Prasanna</h3>
          <p class="role">Visionary & Fullstack Developer</p>
          <p>Blending tradition with tech, Prasanna leads with empathy and clarity.</p>
        </div>
        <div class="member">
          <h3>Charan</h3>
          <p class="role">Backend Architect</p>
          <p>Ensures every route flows with purpose and precision.</p>
        </div>
        <div class="member">
          <h3>Ravi</h3>
          <p class="role">Frontend Designer</p>
          <p>Crafts interfaces that feel like home—warm, inclusive, and vibrant.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

module.exports = router;