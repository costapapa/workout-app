const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema( {
    date: { type: Date,
    default: Date.now
},
    movement: String,
    sets: Number,
    reps: Number,
    weight: Number,
    notes: String
});


module.exports = mongoose.model('Workout', workoutSchema)



// date: 2023-01-01, movement: 'Back Squat', sets: 3, reps: 10, weight: 100, notes: 'Felt hard'
