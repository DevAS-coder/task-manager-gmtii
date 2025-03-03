import React from 'react'

function TaskCard({ task }) {

    const {title, description, id, completed} = task

    return (
        <div className='text-white border-2 border-white m-2 p-3 rounded-xl flex justify-between'>
            <div>
                <h1 className='text-2xl'>{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <p>{completed ? 'True' : 'False'}</p>
            </div>
        </div>
    )
}

export default TaskCard