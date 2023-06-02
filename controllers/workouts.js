const Workout = require('../models/workout')


async function index(req, res, next) {
    const allWorkouts = await Workout.find({})
    console.log('ALL Worksouts are here', allWorkouts)
    res.render('workouts/index', {
    title: 'Workout Page',
    workouts: allWorkouts
    });
}

async function show(req, res, next) {
    try {
     const { id } = req.params
     const workout = await Workout.findById(id)
     console.log(workout)
     res.render('workouts/show', {
        workout,
        title: workout.date
     })
    } catch (err) {
    console.log('ERROR MSG', err.message)
    next()
    }
}

async function newWorkout(req, res, next) {
    res.render('workouts/new', { title: 'Add Workout'})
}

async function create(req, res, next) {
    try {
    const body = req.body
    const createdWorkout = await Workout.create(body)
    
    console.log(body)
    res.redirect(`/workouts/${createdWorkout._id}`)
    } catch (err) {
    console.log('ERROR MSG', err.message)
    res.render('workouts/new')
    }
}



module.exports = {
    index,
    show,
    new: newWorkout,
    create
}