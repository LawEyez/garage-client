import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'

import { DesktopIconProps } from './types'


const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon, shortcut }) => {
  return (
    <div className="flex flex-col items-center py-1 px-2 hover:bg-neutral-400/10 rounded cursor-pointer">
      <div className="text-3xl relative">
        {icon}
        {shortcut && (
          <div className="shadow rounded-sm text-xs bg-neutral-200
          absolute top-5 text-sky-600 flex items-center justify-center w-2 h-2">
            <RiArrowRightUpLine />
          </div>
        )}
      </div>

      <p className="mt-1 text-xs text-white text-shadow capitalize text-center">{name}</p>
    </div>
  )
}

export default DesktopIcon