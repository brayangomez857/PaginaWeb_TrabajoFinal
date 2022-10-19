import React from 'react';
import '../hoja-de-estilos/Informacionpc.css';

const Informacionpc = (props) =>{

    return(
      <div className='contenedor-informacionpc'>
        <img className='imagen-pc'
        src={require(`../imagenes/informacionpc-${props.imagen}.jpg`)}
        alt='foto_acer'/> 
        <div className='contenedor-texto-informacionpc'>
          <p className='nombre-pc' >
            <strong>{props.nombre}</strong></p>
          <p className='tipo-informacion'>Especificaciones</p>
          <ul className='lista-especificaciones'>
            <li className='especificacion1'>{props.especificacion1}</li>
            <li className='especificacion2'>{props.especificacion2}</li>
            <li className='especificacion3'>{props.especificacion3}</li>
            <li className='especificacion4'>{props.especificacion4}</li>
            <li className='especificacion5'>{props.especificacion5}</li>
            
          </ul>


        </div>
      </div>    
    )
}
export default Informacionpc;