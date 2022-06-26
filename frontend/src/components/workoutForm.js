import { useState } from "react"
import {UseWorkoutsContext} from '../hooks/UseWorkoutsContext'

const WorkoutForm  = function () {
    const {dispatch} = UseWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields , setEmptyFields] = useState([])


    const handleSubmit = async function (event) {
        event.preventDefault();
        const workOutObject = {title,load,reps}
        const response = await fetch('/api/workouts',{
            method : 'post',
            body:JSON.stringify(workOutObject),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            dispatch({type:'CREATE_WORKOUT',payload:json})
            console.log('new workout added',json)
        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exercise Title:</label>
            <input type="text"
                onChange={(event)=>setTitle(event.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}/>

            <label>Load:</label>
            <input type="number"
                onChange={(event)=>setLoad(event.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}/>

            <label>Reps:</label>
            <input type="number"
                onChange={(event)=>setReps(event.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}/>

            <button >Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm