import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedTask } from '../features/TasksSlice'

function Delete({id}) {
    const dispatch = useDispatch()

    const deleteTask = async () => {
        try{
            const response = await fetch(`http://46.100.46.149:8069/api/task/${id}/`,{method:'DELETE'})
            if (response.ok) {
                dispatch(deletedTask(id))
            }
        } catch(error){
            console.error(error)
        }
    }

    return (
        <i className="fa-solid fa-trash-can text-red-500 text-lg cursor-pointer" onClick={deleteTask}></i>
    )
}

export default Delete