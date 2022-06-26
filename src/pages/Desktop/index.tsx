import React from 'react'
import {
  FcFolder,
  FcSteam,
  FcVlc,
  FcCommandLine,
  FcCameraIdentification
} from 'react-icons/fc'

import CircleDisplay from '@components/CircleDisplay'
import DesktopIcon from '@components/DesktopIcon'
import Weather from '@components/Weather'
import Level from '@components/Level'

import ds from './ds3.ico'
import pc from './pc.ico'
import pad from './controller.ico'
import { Link } from 'react-router-dom'


const Desktop = () => {
  return (
    <div className='fixed h-screen w-full bg-neutral-900'>
      <img
        className='absolute h-full w-full object-cover'
        src="https://res.cloudinary.com/dvaav1gff/image/upload/v1656164891/windows-11-wallpaper-4_rje7ai.webp"
        alt=""
      />

      <div className="absolute h-full w-full z-10 p-4">
        <div className="absolute grid grid-cols-1 gap-3">
          <DesktopIcon icon={<img className='h-8 w-8' src={pc} />} name='This PC' shortcut />
          <DesktopIcon icon={<FcFolder />} name='movies' />
          <Link to='/detection'>
            <DesktopIcon icon={<FcCameraIdentification />} name='AI' shortcut />
          </Link>
          <DesktopIcon icon={<FcFolder />} name='projects' />
          <DesktopIcon icon={<FcFolder />} name='docs' />
          <DesktopIcon icon={<FcVlc />} name='VLC' shortcut />
          <DesktopIcon icon={<FcSteam />} name='steam' shortcut />
          <DesktopIcon icon={<FcCommandLine />} name='CMD' shortcut />
          <DesktopIcon icon={<img className='h-8 w-8' src={ds} />} name='DS 3' shortcut />
        </div>

        <div className="absolute right-4 grid grid-cols-1 gap-3">
          <Weather />
          
          <div className='border border-neutral-800 rounded-2xl p-4
          flex flex-col items-center bg-neutral-900/70 backdrop-blur'>
            <img className='w-20 h-20 mb-4' src={pad} alt="" />
            
            <div className="grid gap-3 w-full">
              <Level name='Memory' percent={10} />
              <Level name='CPU' percent={20} />
              <Level name='GPU' percent={8} />
            </div>
          </div>

          <CircleDisplay />
        </div>
      </div>
    </div>
  )
}

export default Desktop