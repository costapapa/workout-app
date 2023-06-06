const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts')
const ensureLoggedIn = require('../config/ensureLoggedIn')
const ensureOwner = require('../config/ensureOwner')

//Action index
// Endpoint GET /workouts
router.get('/', ensureLoggedIn, workoutsCtrl.index)
  
//Action Show
// Endpoint GET /workouts/:id
router.get('/:id', ensureLoggedIn, workoutsCtrl.show)

//Action new
// Endpoint GET /workouts/new
router.get('/new', ensureLoggedIn, workoutsCtrl.new)

//Action Create
// Endpoint POST /workouts
router.post('/', ensureLoggedIn, workoutsCtrl.create)

//Action delete
// Endpoint delete /workouts/:id
router.delete('/:id', ensureLoggedIn, ensureOwner, workoutsCtrl.deleteWorkout)

//Action edit
// Endpoint GET /workouts/:id/edit
router.get('/:id/edit', ensureLoggedIn, ensureOwner, workoutsCtrl.edit)

//Action Show
// Endpoint Put /workouts/:id
router.put('/:id', ensureLoggedIn, ensureOwner, workoutsCtrl.update)

module.exports = router;