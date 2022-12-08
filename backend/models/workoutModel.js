const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// new schema has ...
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // auto adds 'created at' timestamp
);

module.exports = mongoose.model('Workout', workoutSchema)

// Workout.find()
