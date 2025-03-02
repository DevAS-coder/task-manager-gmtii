import React from 'react'

function AddNew({func}) {
  return (
    <div className='flex-col justify-center'>
        <input className='w-full border border-white mb-2 p-3 rounded-xl text-white' placeholder='Add Title Here' />
        <textarea className='w-full border border-white mb-2 p-3 rounded-xl text-white' placeholder='Add Description Here'/>
        <button onClick={func} className='bg-white w-full p-1 rounded-4xl cursor-pointer'>Add</button>
    </div>
  )
}

export default AddNew