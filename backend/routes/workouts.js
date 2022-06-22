const express = require('express');

const router = express.Router()


//get all workouts
router.get('/', function(req,res) {
    res.json({messg:'get all workouts'})
})

//get a single workout
router.get('/:id', function() {

})

module.exports = router