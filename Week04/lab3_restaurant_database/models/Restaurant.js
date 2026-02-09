const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    address: {
      building: String,
      street: String,
      zipcode: String,
      coord: [Number]
    },
    borough: String,
    cuisine: String,
    name: String,
    restaurant_id: String,
    city: String
  },
  { collection: "Restaurants" }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
