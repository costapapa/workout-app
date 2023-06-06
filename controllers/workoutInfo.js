const Workout = require("../models/workout")


async function create(req, res){
  const { id } = req.params
  const workout = await Workout.findById(id)
  try {
  workout.workoutInfo.push(req.body)
  await workout.save()
  console.log(id)
  console.log(req.body)
  
} catch (err) {
  console.log('ERR Msg', err.message) 
  next(); 
}
 res.redirect(`/workouts/${workout._id}`)
}


async function deleteWorkout(req, res) {
  try {
    const { id } = req.params
    const { workoutInfoID } = req.body
    const workout = await Workout.findById(id)
    workout.workoutInfo.id(workoutInfoID).deleteOne()
    await workout.save()

    res.redirect(`/workouts/${workout._id}`)
  } catch (err) {
    console.log('ERR Msg', (err))
  }
}










module.exports = {
    create,
    deleteWorkout
}