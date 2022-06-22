require('dotenv').config()

const express = require('express');

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

//listen for requests
app.listen(process.env.PORT,() => {
    console.log('listening on port', process.env.PORT)
});

