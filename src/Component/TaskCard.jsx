import { useDispatch } from "react-redux"
import { handleComplete, handleDelete } from "../redux/action";
import React from "react";
import { Edit } from "./EditTask";

const TaskCard =({id,task,isDone})=>{
    const dispatch=useDispatch();
    return(
        <div>
            <h1>{task}</h1>
            <h3>{id}</h3>
            <button onClick={()=>dispatch(handleDelete(id))}>Delete</button>
            <button onClick={()=>dispatch(handleComplete(id))}>Complete</button>
            <Edit item={{id,task,isDone}}/>
            <hr/>
        </div>
    )
}
export default TaskCard