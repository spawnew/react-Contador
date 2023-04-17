import React from 'react'
import './contador.css'

const Contador = ({contadorclick}) => {
  return (
    <div className='contador'>
      {contadorclick}
    </div>
  )
}

export default Contador
