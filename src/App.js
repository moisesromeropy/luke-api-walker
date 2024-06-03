import './App.css';
import {useEffect, useState} from 'react';

import axios from 'axios';
import {
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Formulario from './Formulario/Formulario';
import MostrarDatos from './MostrarDatos/MostrarDatos';
import People from './MostrarDatos/People';
import Error from './Error/Error';
function App() {
  const [error, setError] = useState(false );
  const [respuesta, setRespuesta]= useState(undefined);
  const [planeta, setPlaneta] = useState("");
  const actualizarError = (errores) =>{
  setError(errores);
  }
  const obtenerDatos = (nuevoSelect) =>{
    setRespuesta(nuevoSelect);
  }
  const obtenerPlaneta = (planetaa) =>{
    setPlaneta(planetaa);
  }
  return (
    <div className="App">
        
      <Routes>
        <Route path='/' element={<Formulario obtenerDatos={obtenerDatos} actualizarError={actualizarError} obtenerPlaneta={obtenerPlaneta}/>}/>
        <Route path="/:id" element={<People />} />
      </Routes>
        {error ? (
    <Error />
) : (
    respuesta !== undefined ? <MostrarDatos respuesta={respuesta} planeta={planeta} /> : ""
)}
    </div>
  );
}

export default App;
