import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Taskbar from '@components/Taskbar'

import Desktop from '@pages/Desktop'
import LockScreen from '@pages/LockScreen'
import ObjectDetection from '@pages/ObjectDetection'


const RoutesConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Taskbar />
        
        <Routes>
          <Route path='/' element={<LockScreen />} />
          <Route path='/desktop' element={<Desktop />} />
          <Route path='/detection' element={<ObjectDetection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutesConfig