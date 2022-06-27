import React from 'react'

const Loader = () => {
  return (
    <div className='relative w-24 h-1 rounded bg-neutral-600 overflow-hidden mt-1'>
      <div className="absolute h-full w-0 rounded bg-sky-500 animate-pingpong"></div>
    </div>

  )
}

export default Loader