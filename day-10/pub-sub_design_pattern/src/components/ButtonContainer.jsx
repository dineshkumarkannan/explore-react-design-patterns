import React from 'react'
import { eventBus } from '../lib/eventBus'

const ButtonContainer = () => {

  const handleClick = (info) => {
    eventBus.publish('SHOW_NOTIFICATION', { ...info, message: "test" })
  }

  return (
    <div className="mt-[5%] flex gap-2">
      <button className="border-4 px-4 py-2 border-green-600 text-green-600 cursor-pointer" onClick={() => handleClick({sentiment: "success"})}>Success</button>
      <button className="border-4 px-4 py-2 border-gray-600 text-gray-600 cursor-pointer" onClick={() => handleClick({sentiment: "info"})}>Info</button>
      <button className="border-4 px-4 py-2 border-red-600 text-red-600 cursor-pointer" onClick={() => handleClick({sentiment: "danger"})}>Danger</button>
    </div>

  )
}

export default ButtonContainer