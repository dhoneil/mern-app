const express = require('express');

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
router.post('/',function (req,res) {
    res.json({messg:'post a new workout'})
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