import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
  return (
    <div className="w-full h-auto flex items-start justify-between gap-7 text-center">
      <div className='lg:w-[25%] md:w-full sm:w-full w-full h-full bg-black/20 absolute grid items-center justify-center'>
        <ul className='text-white text-3xl font-semibold grid gap-[30%]'>
          <Link to="/dash" className='hover:text-indigo-500 cursor-pointer'>Home</Link>
          <Link to="/prog" className='hover:text-indigo-500 cursor-pointer'>Programs</Link>
          <Link to="/read" className='hover:text-indigo-500 cursor-pointer'>Plan</Link>
          <Link to="/sign" className='hover:text-indigo-500 cursor-pointer'>Log out</Link>
        </ul>
      </div>
      <h1 className='text-white text-4xl font-semibold ml-[30%] mt-[5%]'>Plan</h1>
      <div className='absolute text-white text-4xl ml-[30%] mt-[15%] w-[60%]'>
        <div className='flex gap-4'>
          <h1 className='border-b'>Amount:</h1>
          <p className='border-b'>access</p>
        </div>
        <div className='flex gap-4'>
          <h1 className=''>Access:</h1>
          <p></p>
        </div>
      </div>
        <button className='absolute w-[30%] bg-indigo-700 text-4xl font-semibold ml-[50%] mt-[30%]'>
          Cancel Plan
        </button>
    </div>
  )
}

export default Plan