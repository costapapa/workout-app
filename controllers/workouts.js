const workout = require('../models/workout');
const Workout = require('../models/workout')


async function index(req, res, next) {
    const allWorkouts = await Workout.find({})
    // console.log('ALL Worksouts are here', allWorkouts)
    res.render('workouts/index', {
    title: 'Workout Log',
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
    body.workoutOwnerId = req.user._id
    const createdWorkout = await Workout.create(body)
    
    
    // console.log(body)
    res.redirect(`/workouts/${createdWorkout._id}`)
    } catch (err) {
    console.log('ERROR MSG', err.message)
    res.render('workouts/new')
    }
}

async function deleteWorkout(req, res) {
 await Workout.findByIdAndDelete(req.params.id)
 await res.redirect('/workouts')
}

async function edit(req, res, next) {
    try {
      const { id } = req.params
      const workout = await Workout.findById(id)
      res.render('workouts/edit', { title: `Edit ${workout.title}`, workout})
    } catch (err) {
        console.log(err)
        next()
    }
}

async function update(req, res, next) {
    const { id } = req.params
  try {
    const workoutDoc = await Workout.findById(id)
    const body = req.body
    Object.assign(workoutDoc, body)
    await workoutDoc.save()  
  } catch (err) {
    console.log(err)
    // res.render('workouts/edit', { title: 'Update Workout'})
    next()
  }
  res.redirect(`/workouts`)
}



module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    deleteWorkout,
    edit,
    update
}