const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getOneWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// create instance of express router
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", getOneWorkout);

// POST A NEW workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
