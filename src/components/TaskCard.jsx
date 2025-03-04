import React, { useState } from 'react'
import Title from './Title'
import Description from './Description'
import Delete from './Delete'
import CompeleteCheck from './CompeleteCheck'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/TasksSlice'

function TaskCard({ task }) {
    const dispatch = useDispatch()
    const { id, completed } = task
    const [isDone, setisDone] = useState(completed)

    const onCheckChange = (id, newValue) => {
        setisDone(!isDone)
        dispatch(editTask(id, newValue))
    }

    return (
        <div className='text-white border-2 border-white m-2 p-3 rounded-xl flex justify-between'>
            <div className='w-52 break-words'>
                <Title task={task} completed={isDone}/>

                <div className='bg-gray-400 h-px w-52 my-2'></div>

                <Description task={task}/>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <CompeleteCheck task={task} completed={isDone} func={onCheckChange}/>
                <Delete id={id}/>
                <Link to={`/task/${id}/`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
            </div>
        </div>
    )
}

export default TaskCard