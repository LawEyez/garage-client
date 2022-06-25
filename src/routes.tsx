import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Taskbar from './components/Taskbar'

import Desktop from './pages/Desktop'
import LockScreen from './pages/LockScreen'


const RoutesConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Taskbar />
        
        <Routes>
          <Route path='/' element={<LockScreen />} />
          <Route path='/desktop' element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutesConfig