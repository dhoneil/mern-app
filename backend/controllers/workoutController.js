const WorkoutModel = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all
const getAllWorkouts = async function (req,res) {
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get single
const getSingleWorkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await WorkoutModel.findById(id)
    if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(workout);
}

//create new
const createWorkout = async function (req,res) {
    const {title,load,reps} = req.body;

    //add doc to db
    try {
        const createdWorkout = await WorkoutModel.create({title,load,reps})
        res.status(200).json(createdWorkout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//delete
const deleteWorkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await WorkoutModel.findOneAndDelete({_id:id})
    if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(workout)
}

//update
const updateWorkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'no such workout'})
    }
    const workout = await WorkoutModel.findOneAndUpdate({_id:id},{
        ...res.body
    })
    if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}