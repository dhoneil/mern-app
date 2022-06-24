const express = require('express');
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')


const router = express.Router()


//get all workouts
router.get('/', getAllWorkouts)

//get a single workout
router.get('/:id', getSingleWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a new workout
router.delete('/:id',deleteWorkout)

//update a new workout
router.patch('/:id',updateWorkout)

module.exports = router