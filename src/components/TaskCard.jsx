import React, { useState } from 'react'
import Title from './Title'
import Description from './Description'
import Delete from './Delete'
import CompeleteCheck from './CompeleteCheck'

function TaskCard({ task }) {
    const { id, completed } = task
    const [isDone, setisDone] = useState(completed)

    const onCheckChange = () => {
        setisDone(!isDone)
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
            </div>
        </div>
    )
}

export default TaskCard