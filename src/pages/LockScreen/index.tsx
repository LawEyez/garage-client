import React, { useState } from 'react'
import { RiArrowRightLine, RiDoorOpenFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'


const LockScreen = () => {
  const navigate = useNavigate()

  // Configure state.
  const [password, setPassword] = useState<string>('')

  // Handle form submission.
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/desktop')
  }

  return (
    <div className='w-full h-screen bg-neutral-900 text-white flex items-center justify-center relative'>
      <div className="flex flex-col items-center -translate-y-10">
        <div className='w-36 h-36 rounded-full shadow-lg overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src="https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <h1 className="mt-4 mb-6 text-xl font-semibold capitalize align-center">the garage</h1>

        <form onSubmit={handleFormSubmit}>
          <div className='h-6 w-56 flex items-center relative'>
            <input
              className='h-full w-full bg-neutral-700 text-sm py-4 px-2 rounded'
              placeholder='Password'
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button className='cursor-pointer h-full absolute right-0 z-10 mr-2'>
              <RiArrowRightLine />
            </button>
          </div>
        </form>
      </div>

      <div className='absolute bottom-10 flex flex-col items-center'>
        <div className='flex items-center mb-2'>
          <RiDoorOpenFill className='text-3xl mr-2' />
          <span className='capitalize text-sm'>doors 11</span>
        </div>

        <span className='text-xs text-neutral-400'>Ordinary people use doors, thieves use windows.</span>
      </div>
      
    </div>
  )
}

export default LockScreen