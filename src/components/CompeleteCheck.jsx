import React, { useState } from 'react'

function CompeleteCheck({ task ,completed, func }) {
    const { title, description, id } = task
    const editChecked = async () => {
        func()
        try {
            const response = await fetch(`http://46.100.46.149:8069/api/task/${id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed: !completed,
                }),
            });
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <input className='w-4 h-4' type='checkbox' checked={completed ? true : false} onChange={editChecked} />
    )
}

export default CompeleteCheck