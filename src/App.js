
import './App.css';
import Componentes from './componente.jsx'
import Boton from './boton.jsx'
import Contador from './contador.jsx';
import { useState } from 'react';






function App() {
  const [contadorclick, setcontadorclick]=useState(0);
  const cambiar= ()=>{
    setcontadorclick(contadorclick+1);
   }
   const reset=()=>{
    setcontadorclick(0);
   }
  return (
    <div className="container">
      <Componentes
      nombre='kaito'
      descripcion='alto duelista '

      />
      <Contador
      contadorclick={contadorclick}
      />

      <Boton
      texto="presione"
      cambiar={cambiar}
      />
      <Boton
      texto="reiniciar"
      cambiar={reset}
      />
    </div>
  );
}

export default App;
