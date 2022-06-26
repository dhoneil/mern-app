import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const UseWorkoutsContext = function () {
    const context = useContext(WorkoutContext)
    if (!context) {
        throw Error('useWorkoutsContext must be used inside a workoutscontextprovider')
    }
    return context;
}