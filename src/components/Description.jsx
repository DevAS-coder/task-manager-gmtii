import React, { useState, useRef } from 'react';

function Description({ description }) {
    const [isEditingDescription, setisEditingDescription] = useState(false);
    const [Description, setDescription] = useState(description);
    const textareaRef = useRef(null); 
    
    const handleEdit = () => {
        setisEditingDescription(true);
        setTimeout(() => textareaRef.current?.focus(), 0); 
    };

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
                    onClick={() => setisEditingDescription(false)}
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
