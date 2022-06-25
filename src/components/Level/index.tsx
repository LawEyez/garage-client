import React from 'react'

import { LevelProps } from './types'


const Level: React.FC<LevelProps> = ({ name, percent }) => {
  return (
    <div className='w-full'>
      <div className="h-1 w-full relative bg-neutral-700 rounded overflow-hidden">
        <div className={`absolute top-0 left-0 h-1 w-${percent} bg-white z-10 rounded`}></div>
      </div>

      <span className='text-xs text-neutral-200'>{name}</span>
    </div>
  )
}

export default Level