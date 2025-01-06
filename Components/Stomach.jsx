import React from 'react'
import { useContext } from 'react'
import { ValueContext } from '../src/Gokul'
const Stomach = () => {
  let name = useContext(ValueContext)
  return (
    <div>
      <h1 style={{
        backgroundColor:name?'aqua':'yellow',
        color:'purple',
      }}>Color Changing</h1>
    </div>
  )
}

export default Stomach
