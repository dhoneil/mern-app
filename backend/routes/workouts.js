const express = require('express');
const WorkoutModel = require('../models/workoutModel')

const router = express.Router()


//get all workouts
router.get('/', function(req,res) {
    res.json({messg:'get all workouts'})
})

//get a single workout
router.get('/:id', function(req,res) {
    res.json({mssg:'get single workout'})
})

//post a new workout
router.post('/', async function (req,res) {
    const {title,load,reps} = req.body;
    try {
        const createdWorkout = await WorkoutModel.create({title,load,reps})
        res.status(200).json(createdWorkout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//delete a new workout
router.delete('/:id',function (req,res) {
    res.json({messg:'delete a workout'})
})

//update a new workout
router.patch('/:id',function (req,res) {
    res.json({messg:'update a workout'})
})

module.exports = router