import obiKenobiImg from './../obi-wan-kenobi.jpg';
const Error = (props) =>{
    return (
        <div style={{ textAlign: 'center' }}>
  <img src={obiKenobiImg} alt="Error" style={{ height: '300px', width: '300px' }} />
  <p style={{ fontSize: '18px', color: 'red' }}>Estos no son los droides que está buscando</p>
</div>

    )
}

export default Error;