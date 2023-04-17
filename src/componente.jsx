import React from 'react'

const Componentes = ({nombre,descripcion}) => {
  return (
  
    
    <div className='container'>
          <div>
        <p>{nombre}</p>
    </div> 
    <div className='containerfoto'>
      <img className="foto"src={require('./imagenes/galaxy.jpg')} alt='galaxxy' />
    </div>
      <div>
        <div>
            <p>{descripcion}</p>
        </div>
       
    </div>
    </div>


  );
}

export default Componentes
