const mongoose = require('mongoose');
const Solution = require('./models/Solution');

mongoose.connect('mongodb://localhost:3000/punarjanm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleSolutions = [
  {
    title: "Upcycling Plastic Bottles",
    description: "Turn plastic bottles into planters, lamps, or eco-bricks.",
    tags: ["plastic", "reuse", "upcycle"]
  },
  {
    title: "Reusing Old Clothes",
    description: "Convert old clothes into bags, quilts, or cleaning cloths.",
    tags: ["textile", "fabric", "repurpose"]
  },
  {
    title: "Composting Organic Waste",
    description: "Use kitchen scraps to create nutrient-rich compost for gardens.",
    tags: ["organic", "compost", "soil"]
  },
  {
    title: "DIY Paper Bricks",
    description: "Shred old paper and compress it into fuel-efficient bricks.",
    tags: ["paper", "fuel", "recycle"]
  }
];
  const solutions = [
  {
    title: "Turn Food Waste into Compost",
    description: "Use fruit peels, vegetable scraps, and leftovers to create nutrient-rich compost for gardens.",
    tags: ["food", "waste", "compost", "organic", "reuse"],
    imageUrl: "/images/compost.jpg"
  },
  {
    title: "Make Vegetable Broth from Scraps",
    description: "Boil leftover veggie peels and stems to create a flavorful broth for soups.",
    tags: ["food", "scraps", "broth", "reuse"],
    imageUrl: "/images/broth.jpg"
  }
];


Solution.insertMany(solutions)
  .then(() => {
    console.log("✅ Sample solutions added!");
    mongoose.disconnect();
  })
  .catch(err => console.error("❌ Error seeding:", err));
