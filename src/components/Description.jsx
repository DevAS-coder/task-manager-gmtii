import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/TasksSlice';

function Description({ task }) {
    const { title, description, id, completed } = task
    const dispatch = useDispatch()
    const [isEditingDescription, setisEditingDescription] = useState(false);
    const [Description, setDescription] = useState(description);
    const textareaRef = useRef(null); 

    const handleEdit = () => {
        setisEditingDescription(true);
        setTimeout(() => textareaRef.current?.focus(), 0); 
    };

    const editDescription = async () => {
        setisEditingDescription(false)
        dispatch(editTask(id, Description))
        if (Description != description) {
            try {
                const response = await fetch(`http://46.100.46.149:8069/api/task/${id}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: title,
                        description: Description,
                        completed: completed,
                    }),
                });
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className='flex justify-between items-center'>
            {isEditingDescription ? (
                <textarea
                    ref={textareaRef}
                    className='w-48'
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            ) : (
                <div className={`break-words`}>{Description}</div>
            )}

            {isEditingDescription ? (
                <i
                    className="fa-solid fa-check text-sm cursor-pointer"
                    onClick={editDescription}
                ></i>
            ) : (
                <i
                    className="fa-solid fa-pen text-sm cursor-pointer"
                    onClick={handleEdit}
                ></i>
            )}
        </div>
    );
}

export default Description;
