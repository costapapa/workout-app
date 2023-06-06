const express = require('express');
const router = express.Router();
const workoutInfoCtrl = require('../controllers/workoutInfo')
const ensureLoggedIn = require('../config/ensureLoggedIn')


router.post('/workouts/:id/workoutInfo', ensureLoggedIn, workoutInfoCtrl.create)

router.delete('/workouts/:id/workoutInfo/:workoutInfoId', ensureLoggedIn, workoutInfoCtrl.deleteWorkout)




module.exports = router;