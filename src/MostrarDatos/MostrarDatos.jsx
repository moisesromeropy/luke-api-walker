
const MostrarDatos = (props) =>{
    const {planeta} = props;
    return(
        <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
  {Object.entries(props.respuesta).map(([clave, valor], index) => (
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
</div>  
    )
}

export default MostrarDatos;