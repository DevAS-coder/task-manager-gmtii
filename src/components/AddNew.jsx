import React, { useState } from 'react'

function AddNew({ func }) {

    // Define States
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [alert, setAlert] = useState(false)

    // Validation
    const validation = () => {
        setAlert(true)
        setTimeout(() =>{setAlert(false)},3000)
    }

    return (
        <div className='flex-col justify-center'>
            <input onChange={(e) => {setTitle(e.target.value)}} value={title} className='w-full border border-white mb-2 p-3 rounded-xl text-white' placeholder='Add Title Here' />
            <textarea onChange={(e) => {setDescription(e.target.value)}} value={description}  className='w-full border border-white mb-2 p-3 rounded-xl text-white' placeholder='Add Description Here' />
            {alert ? <p className='text-white mb-2 text-center p-1 rounded-4xl bg-red-600'>Title Cannot be Empty</p> : null}
            {
                title ? <button onClick={() => func(title, description)} className='bg-white w-full p-1 rounded-4xl cursor-pointer'>Add</button>
                :
                <button onClick={validation} className='bg-white w-full p-1 rounded-4xl cursor-pointer'>Add</button>
            }
        </div>
    )
}

export default AddNew