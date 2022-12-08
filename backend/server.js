require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts"); // require routes file

// create express app
const app = express();

// middleware
app.use(express.json()); // if req has body it passes it to req object
app.use((req, res, next) => {
  console.log(req.path, req.method), next();
}); // next runs the next item (app.get) log prints the reuest types in console

//routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {app.listen(process.env.PORT, () => {console.log('connected to db & listening on port 4000')})})
  .catch((error) => {
    console.log(error);
  });

//process.env // load .env file
