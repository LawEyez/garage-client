import React from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'


const Weather = () => {
  return (
    <div className='p-4 rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur text-white w-max'>
      <span className='text-xs text-neutral-400 capitalize'>nakuru, kenya</span>

      <div className='flex items-center justify-between mt-2 space-x-10'>
        <span className='text-4xl font-light'>21 &deg;C</span>
        <BsFillCloudSunFill className='text-amber-300 text-2xl' />
      </div>
    </div>
  )
}

export default Weather