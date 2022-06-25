import React from 'react'

import { DesktopIconProps } from './types'


const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center py-1 px-2 hover:bg-neutral-400/10 rounded cursor-pointer">
      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-1 text-xs text-white text-shadow capitalize text-center">{name}</p>
    </div>
  )
}

export default DesktopIcon