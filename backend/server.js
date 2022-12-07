require("dotenv").config();

const express = require("express");

// create express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method), next();
}); // next runs the next item (app.get) log prints the reuest types in console

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
}); // nodemon server.js listens and reflects updates automatically.

//process.env // load .env file
