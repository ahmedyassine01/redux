import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { handleAdd } from '../redux/action';

const Add = () => {
    const[newTaskAction, setNewTaskAction]=useState("hello");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTask={
            id:Math.random(),task:newTaskAction,isDone:false
        };
        dispatch(handleAdd(newTask))
        setNewTaskAction("")
    }; 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={newTaskAction}
            onChange={(e)=>setNewTaskAction(e.target.value)}
            placeholder='hahaha' />
            <input type="submit" />

        </form>
    </div>
  )
}

export default Add