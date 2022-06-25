import React from 'react'
import { RiUser6Fill } from 'react-icons/ri'


const CircleDisplay = () => {
  return (
    <div className='p-4 rounded-2xl border border-neutral-800 
    bg-neutral-900/70 backdrop-blur text-white flex flex-col items-center'>

      <div className="border border-sky-400/25 w-32 h-32 rounded-full flex
      flex-col items-center justify-center mb-4">
        <span className='text-5xl font-light text-sky-200'>20</span>
        <RiUser6Fill className='mt-3 text-sky-500 text-2xl'/>
      </div>

      <span className='text-neutral-300 capitalize text-xs'>total members</span>
    </div>
  )
}

export default CircleDisplay