import React from 'react'
import { Link } from 'react-router-dom'

const Progress = () => {
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
      <div>
        <h1 className='text-white text-3xl font-normal ml-[25%] absolute'>Classes:</h1>

        <div className='absolute ml-[30%] mt-[5%] w-[60%]'>
          <table className='text-white text-3xl border w-full'>
            <thead>
              <tr className='border'>
                <th>Activity</th>
                <th>Schedule</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border'>
                <td>yoga</td>
                <td></td>
                <td></td>
              </tr>
              <tr className='border'>
                <td>aerobics</td>
                <td></td>
                <td></td>
              </tr>
              <tr className='border'>
                <td>boxing</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <h1 className='text-white text-3xl font-normal ml-[25%] mt-[25%] absolute'>Nutrition Guide</h1>
      <div className='absolute ml-[30%] mt-[30%] w-[60%]'>
        <table className='text-white text-3xl w-full'>
          <thead className='border'>
            <tr>
              <th>Activity</th>
              <th>Schedule</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='border'>
            <tr>
              <td>yoga</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Progress