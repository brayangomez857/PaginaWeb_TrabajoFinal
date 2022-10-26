import React from "react";
import '../hoja-de-estilos/Header.css'

const Header = (props)=>{
    return(
    <nav className="contenedor">
      <div className="Logo">
          <img src="https://secureservercdn.net/198.71.233.194/t5n.aa6.myftpupload.com/wp-content/uploads/2019/11/innovatek-logo-500x200.png" alt='' />
      </div>
      <div className="enlaces">
      <li><a href="#1" className="PC-ACER">{props.titulo}</a></li>
      <li><a href="#2" className="PC-DELL">{props.titulo2}</a></li>
      <li><a href="#3" className="PC-LENOVO">{props.titulo3}</a></li>
      </div>
    </nav> 


    );
}
export default Header;