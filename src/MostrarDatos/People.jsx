import { useEffect, useState } from "react";
import obiKenobiImg from './../obi-wan-kenobi.jpg';
import axios
 from "axios";
import {
    Link,
    Routes,
    Route,
    useParams
  } from "react-router-dom";
const People = (props)=>{
    const [error, setError] = useState(false );
    const [respuesta, setRespuesta]= useState({});
    const [planeta, setPlaneta] = useState({});
    const {id} = useParams();
    const actualizarError = (errores) =>{
        setError(errores);
    }
    const obtenerDatos = (nuevoSelect) =>{
        setRespuesta(nuevoSelect);
    }
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(({data}) => {
        actualizarError(false);
        obtenerDatos(data);
         console.log(data);
        planeta(data.homeworld)
        })
        .catch(({error})=>{
           actualizarError(true);
            console.log("Error al obtener datos", error)
        });

        const planeta = (urlPlanetas) =>{
            axios.get(urlPlanetas)
            .then(({data}) => {
                console.log(data);
            setPlaneta(data);
            })
            .catch(({error})=>{
               actualizarError(true);
                console.log("Error al obtener datos", error)
            });
        }
    }, [])    
    
    return(
        <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
  {error ? (
    <div style={{ textAlign: 'center' }}>
      <img src={obiKenobiImg} alt="Error" style={{ height: '300px', width: '300px' }} />
      <p style={{ marginTop: '10px', fontSize: '18px', color: 'red' }}>Estos no son los droides que está buscando</p>
    </div>
  ) : (
    respuesta !== undefined && (
      <div>
        {Object.entries(respuesta).map(([clave, valor], index) => (
          index < 4 && (
            <p key={clave}>
              <span style={{ fontWeight: 'bold' }}>{clave.charAt(0).toUpperCase() + clave.slice(1)}:</span> {valor}
            </p>
          )
        ))}
        {planeta !== "" && (
          <p>
            <span style={{ fontWeight: 'bold' }}>Planeta:</span> {planeta.name}
          </p>
        )}
        <Link to={"/"} style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: '#007bff' }}>Go Home</Link>
      </div>
    )
  )}
</div>
    )
}

export default People;