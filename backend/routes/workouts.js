const express = require("express");

// create instance of express router
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// POST A NEW workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new workout" });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a new workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a new workout" });
});

module.exports = router;
