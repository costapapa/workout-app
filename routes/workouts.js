const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts')

router.get('/', workoutsCtrl.index)
  
router.get('/:id', workoutsCtrl.show)





module.exports = router;