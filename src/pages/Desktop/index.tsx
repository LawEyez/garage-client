import React from 'react'
import {
  FcFolder,
  FcSteam,
  FcVlc,
  FcCommandLine
} from 'react-icons/fc'

import CircleDisplay from '../../components/CircleDisplay'
import DesktopIcon from '../../components/DesktopIcon'
import Weather from '../../components/Weather'

import ds from './ds3.ico'
import pc from './pc.ico'
import pad from './controller.ico'
import Level from '../../components/Level'


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
          <DesktopIcon icon={<img className='h-8 w-8' src={pc} />} name='This PC' />
          <DesktopIcon icon={<FcFolder />} name='movies' />
          <DesktopIcon icon={<FcFolder />} name='music' />
          <DesktopIcon icon={<FcFolder />} name='projects' />
          <DesktopIcon icon={<FcFolder />} name='docs' />
          <DesktopIcon icon={<FcVlc />} name='VLC' />
          <DesktopIcon icon={<FcSteam />} name='steam' />
          <DesktopIcon icon={<FcCommandLine />} name='CMD' />
          <DesktopIcon icon={<img className='h-10 w-10' src={ds} />} name='DS 3' />
        </div>

        <div className="absolute right-4 grid grid-cols-1 gap-4">
          <Weather />
          <CircleDisplay />
          <div className='border border-neutral-800 rounded-2xl p-4
          flex flex-col items-center bg-neutral-900/70 backdrop-blur'>
            <img className='w-20 h-20 mb-4' src={pad} alt="" />
            
            <div className="grid gap-3 w-full">
              <Level name='Memory' percent={10} />
              <Level name='CPU' percent={20} />
              <Level name='GPU' percent={8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop