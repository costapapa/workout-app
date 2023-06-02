const express = require('express');
const router = express.Router();
const workoutInfoCtrl = require('../controllers/workoutInfo')


router.post('/workouts/:id/workoutInfo', workoutInfoCtrl.create)




module.exports = router;