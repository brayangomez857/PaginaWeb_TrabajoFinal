import React from "react";
import '../hoja-de-estilos/Footer.css';

const Footer =()=>{
    return(
      <footer className="pie_pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
               <a href="#">
                  <img src="https://secureservercdn.net/198.71.233.194/t5n.aa6.myftpupload.com/wp-content/uploads/2019/11/innovatek-logo-500x200.png" alt="logo de pagina"></img>
               </a>
            </figure>
          </div>
          <div className="box">
              <h2>SOBRE NOSOTROS</h2>
                <p>Esta Empresa Busca dar soluciones a las cada individuo
                    con el fin de informar sobre los diferentes tipos de dispositivos
                    (laptos). y que queden satisfechos con las compras.
                </p>
          </div>
            <div className="box">
                <h2>SIGUENOS</h2>
            <div className="red-social">
                <a href="https://es-la.facebook.com/"> <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" width="45" height="45"></img></a>
                <a href="https://www.instagram.com/"> <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" width="45" height="45"></img></a>
                <a href="https://www.youtube.com/"> <img src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png" width="45" height="45"></img></a>
                <a href="https://twitter.com/"> <img src="https://icones.pro/wp-content/uploads/2021/02/icones-twitter-noires.png" width="45" height="45"></img></a>
            </div>
            </div>

          </div>
          <div className="grupo-2"></div>
          <small>Todos los derechos reservados</small>
        </footer>

    );
}
export default Footer