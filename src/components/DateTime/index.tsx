import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
  }, [])

  return (
    <div className='flex flex-col items-end text-white text-xs'>
      <span>{date.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric' }).split(',')[1]}</span>
      <span>{date.toLocaleDateString('en-US')}</span>
    </div>
  )
}

export default DateTime