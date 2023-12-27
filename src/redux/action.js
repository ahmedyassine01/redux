import { COMPLETE, ADD, DELETE,EDIT  } from "./actionType"



export const handleDelete=(ID)=>{
    return{
        type:DELETE,
        payload:ID,
    }
}
export const handleComplete=(ID)=>{
    return{
        type:COMPLETE,
        payload:ID,
    }
}
export const handleAdd=(newTask)=>{
    return{
        type: ADD,
        payload:newTask,
    }
}
export const handlEdit=(newTask)=>{
    return{
        type: EDIT,
        payload:newTask,
    }
}