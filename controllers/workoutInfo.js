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









module.exports = {
    create
}