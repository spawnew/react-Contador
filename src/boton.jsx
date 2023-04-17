import React from 'react'
import './boton.css'

const Boton = ({texto,cambiar,lotoco}) => {
  return (
    <div className='boton'>
      <button  onClick={cambiar} className={'lotoco' ?'botonencendido' : 'botonapagado'}      > 
      {texto }
      </button>
    </div>
  )
}

export default Boton
