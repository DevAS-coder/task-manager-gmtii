import React from 'react'
import { useParams } from 'react-router-dom'

function SingleTask() {
    const { taskId } = useParams()

    return (
        <div className='text-white'>SingleTask : {taskId}</div>
    )
}

export default SingleTask