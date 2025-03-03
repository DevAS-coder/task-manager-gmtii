import React, { useState, useRef } from 'react';

function Title({ title, completed }) {
    const [isEditingTitle, setisEditingTitle] = useState(false);
    const [Title, setTitle] = useState(title);
    const inputRef = useRef(null);

    const handleEdit = () => {
        setisEditingTitle(true);
        setTimeout(() => inputRef.current?.focus(), 0); 
    };

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
                <div className={`break-words ${completed ? 'line-through' : ''}`}>{title}</div>
            )}

            {isEditingTitle ? (
                <i
                    className="fa-solid fa-check text-sm cursor-pointer"
                    onClick={() => setisEditingTitle(false)}
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
