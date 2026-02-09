const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurants.js');

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Make sure it comes back as json

// TODO - Replace your Connection String details here
const DB_NAME = "Restaurants";
const DB_USER_NAME = "admin";              // your Atlas username
const DB_PASSWORD = "password123!";        // your Atlas password
const CLUSTER_ID = "tqloabq";               // from your cluster URL

const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`


async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}

// Routes
app.use('/restaurants', restaurantRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
  try {
    connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
