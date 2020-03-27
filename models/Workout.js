const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercise: [
    {
      type: {
        type: String,
        default: "cardio",
        allowNull: false
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: Number,
      reps: Number,
      sets: Number,
    }
  ],
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
