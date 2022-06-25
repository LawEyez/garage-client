import React from 'react'
import {
  RiDoorOpenFill,
  RiSearch2Line,
  RiArrowUpSLine
} from 'react-icons/ri'
import {
  FcFolder,
  FcSteam,
  FcVlc
} from 'react-icons/fc'
import { IoVolumeHighOutline, IoWifiOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import DateTime from '../DateTime'


const Taskbar = () => {
  return (
    <nav className='fixed z-50 bottom-0 left-0 h-10 w-full bg-neutral-900/80 backdrop-blur
    flex items-center justify-center px-4'>
      
      <div className="space-x-4 flex items-center text-xl text-white">
        <Link to='/'>
          <RiSearch2Line />
        </Link>

        <FcVlc />

        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500/80 backdrop-blur-xl">
          <RiDoorOpenFill />
        </div>        
        
        <Link to='/'>
          <FcFolder />
        </Link>

        <FcSteam />
      </div>

      <div className='absolute right-4 flex items-center text-white'>
        <div className="flex items-center mr-4 space-x-2">
          <RiArrowUpSLine />
          <IoWifiOutline />
          <IoVolumeHighOutline />
        </div>

        <DateTime />
      </div>
    </nav>
  )
}

export default Taskbar