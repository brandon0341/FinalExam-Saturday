import React from 'react'
import { Link } from 'react-router-dom'

const Dashprof = () => {
  return (
    <>
      <div className="w-full h-auto flex items-start justify-between gap-7 text-center">
        <h1 className='text-white text-4xl text-indigo-700 font-bold absolute ml-[25%] mt-[1%]'>
          Workout Progress Dashboard:
        </h1>
        <div className='lg:w-[25%] md:w-full sm:w-full w-full h-full bg-black/20 absolute grid items-center justify-center'>
          <ul className='text-white text-3xl font-semibold grid gap-[30%]'>
            <Link to="/dash" className='hover:text-indigo-500 cursor-pointer'>Home</Link>
            <Link to="/prog" className='hover:text-indigo-500 cursor-pointer'>Programs</Link>
            <Link to="/read" className='hover:text-indigo-500 cursor-pointer'>Plan</Link>
            <Link to="/sign" className='hover:text-indigo-500 cursor-pointer'>Log out</Link>
          </ul>
        </div>
        <div className='w-[70%] h-auto relative flex items-center justify-center ml-[29%] mt-[5%]'>
          <div className='text-center w-[50%] h-[40vh] ml-[-54%]'>
            <img src="https://i1.wp.com/www.lucyliang.com/wp-content/uploads/2019/10/72342923_10220389401227575_7840277565498458112_o.jpg?fit=1024%2C576&ssl=1" alt=""
              className='w-full h-full rounded-full'
            />
          </div>
            <div className='text-center w-[50%] h-[40vh] bg-white/40 ml-[50%] absolute border rounded-md'>
              <img src="https://www.girlschase.com/media/2019/04/getting-slim-5.png" alt=""
                className='w-full h-full'
              />
            </div>
            <div className='text-center w-[50%] h-[40vh] bg-white/40 mt-[60%] ml-[-54%] absolute'>
              <img src="https://breakingmuscle.com/wp-content/uploads/2021/06/bbfriday.png" alt=""
                className='w-full h-full'
              />
            </div>
            <div className='text-center w-[50%] h-[50vh] mt-[60%] ml-[50%] absolute'>
              <img src="https://i.pinimg.com/736x/b3/4d/4e/b34d4ef2f482c32967863b750eb2623f.jpg" alt=""
                className='w-full h-full rounded-full'
              />
            </div>
          </div>
        </div>
      </>
      )
}

      export default Dashprof