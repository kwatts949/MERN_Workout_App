const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    // tries to create a workout
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout); // if successful, returns 200 status with json of the workout
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
