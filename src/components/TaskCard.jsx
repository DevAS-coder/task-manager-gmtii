import React, { useState } from 'react'
import Title from './Title'
import Description from './Description'

function TaskCard({ task }) {

    const { title, description, id, completed } = task
    const [isDone, setisDone] = useState(completed)

    return (
        <div className='text-white border-2 border-white m-2 p-3 rounded-xl flex justify-between'>
            <div className='w-52 break-words'>
                <Title title={title} completed={isDone}/>

                <div className='bg-gray-400 h-px w-52 my-2'></div>
                
                <Description description={description}/>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <input className='w-4 h-4' type='checkbox' checked={isDone ? true : false} onChange={() => { setisDone(!isDone) }} />
                <i className="fa-solid fa-trash-can text-red-500 text-lg cursor-pointer"></i>
            </div>
        </div>
    )
}

export default TaskCard