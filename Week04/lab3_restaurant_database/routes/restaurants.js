const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/", async (req, res) => {
  try {
    if (req.query.sortBy) {
      const order = req.query.sortBy === "DESC" ? -1 : 1;

      const data = await Restaurant.find(
        {},
        { _id: 0, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }
      ).sort({ restaurant_id: order });

      return res.json(data);
    }

    const data = await Restaurant.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/cuisine/:type", async (req, res) => {
  try {
    const cuisineType = req.params.type;

    const data = await Restaurant.find({ cuisine: cuisineType });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/Delicatessen", async (req, res) => {
  try {
    const data = await Restaurant.find(
      {
        cuisine: "Delicatessen",
        city: { $ne: "Brooklyn" }
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        city: 1
      }
    ).sort({ name: 1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
