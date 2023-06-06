const Workout = require('../models/workout')

module.exports = async function(req, res, next) {

    try {
     // compare the workoutOwnerId with the authenticated user
     // return if they are the same
     // next() if they are not the same if not redirect to error page.
     console.log(`user is id ${req.user._id}`)
     const requestorID = req.user._id
     console.log(requestorID)
     const workoutToEdit = await Workout.findById(req.params.id)
     const workoutOwnerId = workoutToEdit.workoutOwnerId
     console.log(workoutOwnerId)
     
     if (requestorID.equals(workoutOwnerId)) {
        return next()
     } else {
        res.send('YOU ARE NOT THE OWNER')
     }

    } catch (err) {
    console.log(err)
    }
    // if ( req.isAuthenticated() ) return next();
    // res.redirect('/auth/google');
  }