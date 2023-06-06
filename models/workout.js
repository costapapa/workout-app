const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema( {
    movement: String,
    sets: Number,
    reps: Number,
    weight: Number,
    notes: String
}, {
    timestamps: true
});

const workoutSchema = new Schema( {
    title: String,
    date:  Date,
    workoutInfo: [sessionSchema],
    workoutOwnerId: { type: Schema.Types.ObjectId }
});





module.exports = mongoose.model('Workout', workoutSchema)



// date: 2023-01-01, movement: 'Back Squat', sets: 3, reps: 10, weight: 100, notes: 'Felt hard'
