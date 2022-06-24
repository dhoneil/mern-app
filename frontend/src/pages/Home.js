import { useEffect, useState } from "react";

//components
import WorkoutDetails from '../components/workoutDetails'

const Home = function () {
  const [workoutsList, setworkouts] = useState(null);

  //on initialized
  useEffect(function () {
    const fetchWorkouts = async function () {
      //get from server
      const response = await fetch("/api/workouts");
      //convert to json object array list
      const json = await response.json();

      //check if response is ok
      if (response.ok) {
        setworkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workoutsList && workoutsList.map((w) => (
            <WorkoutDetails key={w._id} workout={w}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
