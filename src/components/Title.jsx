import React, { useState, useRef } from 'react';

function Title({ task, completed }) {
    const { title, description, id } = task
    const [isEditingTitle, setisEditingTitle] = useState(false);
    const [Title, setTitle] = useState(title);
    const inputRef = useRef(null);

    const handleEdit = () => {
        setisEditingTitle(true);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const editTitle = async () => {
        setisEditingTitle(false)
        if (Title != title) {
            try {
                const response = await fetch(`http://46.100.46.149:8069/api/task/${id}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: Title,
                        description: description,
                        completed: completed,
                    }),
                });
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className='text-2xl flex justify-between items-center'>
            {isEditingTitle ? (
                <input
                    ref={inputRef}
                    className='w-48'
                    maxLength={15}
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            ) : (
                <div className={`break-words ${completed ? 'line-through' : ''}`}>{Title}</div>
            )}

            {isEditingTitle ? (
                <i
                    className="fa-solid fa-check text-sm cursor-pointer"
                    onClick={editTitle}
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

export default Title;
