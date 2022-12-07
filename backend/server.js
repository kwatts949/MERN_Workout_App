require("dotenv").config();

const express = require("express");
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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
}); // nodemon server.js listens and reflects updates automatically.

//process.env // load .env file
