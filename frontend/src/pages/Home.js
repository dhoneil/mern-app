import { useEffect } from "react";
import {UseWorkoutsContext} from '../hooks/UseWorkoutsContext'

//components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForm'

const Home = function () {
  const {workouts,dispatch} = UseWorkoutsContext()

  //on initialized
  useEffect(function () {
    const fetchWorkouts = async function () {
      //get from server
      const response = await fetch("/api/workouts");
      //convert to json object array list
      const json = await response.json();

      //check if response is ok
      if (response.ok) {
        dispatch({type:'SET_WORKOUTS',payload:json})
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((w) => (
            <WorkoutDetails key={w._id} workout={w}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
