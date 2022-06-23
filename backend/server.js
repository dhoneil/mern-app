require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//-------middleware(s)

//this will parse all data into json before throwing to the server
app.use(express.json())

//this function will fire for every request that comes in
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
});

//-------middleware(s)

//ROUTES
app.use('/api/workouts/',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(function () {
        //listen for requests
        app.listen(process.env.PORT,() => {
            console.log('connected to db and listening on port', process.env.PORT)
        });
    })
    .catch(function (error) {
        console.log(error)
    })

