import { useState } from "react";
import axios from "axios";
const Formulario = (props) =>{
    const {obtenerDatos} = props;
    const {actualizarError}= props;
    const {obtenerPlaneta} = props;
    const [urlPlaneta, setUrlPlaneta] = useState("");
     const [selectAuxiliar, setSelectAuxiliar] = useState("people");
    const [idAuxiliar, setIdAuxiliar]=useState("");

    const actualizarDatos = (event) =>{
        event.preventDefault();
        axios.get(`https://swapi.dev/api/${selectAuxiliar}/${idAuxiliar}`)
        .then(({data}) => {
        obtenerPlaneta("");
        actualizarError(false);
        obtenerDatos(data);
        if(selectAuxiliar==="people"){
            planeta(data.homeworld)
        }
        //  console.log(data);
        })
        .catch(({error})=>{
           actualizarError(true);
            console.log("Error al obtener datos", error)
        });
        setIdAuxiliar("");
        setSelectAuxiliar("people");
    }
    const planeta = (urlPlanetas) =>{
        axios.get(urlPlanetas)
        .then(({data}) => {
            console.log(data);
        obtenerPlaneta(data);
        })
        .catch(({error})=>{
           actualizarError(true);
            console.log("Error al obtener datos", error)
        });
    }
    return(
        <form onSubmit={actualizarDatos} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <label style={{ marginBottom: '0.5rem' }}>Search For:</label>
        <select
          value={selectAuxiliar}
          onChange={(e) => setSelectAuxiliar(e.target.value)}
          style={{ marginBottom: '0.5rem' }}
        >
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label style={{ marginBottom: '0.5rem' }}>Id</label>
        <input
          value={idAuxiliar}
          onChange={(e) => setIdAuxiliar(e.target.value)}
          type="text"
          required
          style={{ marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
      </form>
    )
}

export default Formulario;