import logo from './logo.svg';
import React from 'react';
import './App.css';
import Informacionpc from './components/Informacionpc';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    
    <div className="App"> 
      <div>
        <Header
        titulo="Acer Aspire 5 A515-54  "
        titulo2="  Dell Inspiron 5593  "
        titulo3="  Lenovo Legion Y530  "/>
      </div>
      
      <div className='contenedor-principal'>
        
        <Informacionpc 
          id='1'
          nombre='Acer aspire 5 A515'
          imagen='acer-aspire-5-A515-54'
          especificacion1='Acer aspire 5 A515'
          especificacion2='Intel Core i5-7200U 2.50GHz Dual Core Processor (Max Turbo up to 3.1GHz, 3M Cache), SD media Reader, HD webcam'
          especificacion3='8GB DDR4 SDRAM, 256GB Solid State Drive, Kensington Lock Slot, No Optical Drive'
          especificacion4='802.11ac WiFi, Bluetooth 4.1, 1 x USB 3.0, 2 x USB 2.0, 1x HDMI, 1x Headphone output/Microphone input combo'
          especificacion5='Windows 10 Home 64-Bit, Up to 6 hrs Battery Life, Color: Black'
      />
      <Informacionpc 
      id='2'
      nombre='Dell Inspiron 5593'
      imagen='Dell-Inspiron-5593'
      especificacion1='Memoria RAM: 8 GB.'
      especificacion2='Almacenamiento: 256 GB.'
      especificacion3='Sistema Operativo Instalado: Windows 10 Home.'
      especificacion4='Tamaño de pantalla: 39.6 cm (15.6")'
      especificacion5='Procesador: Intel® Core™ i5 de 10ma Generación.'
      />
      <Informacionpc 
      id='3'
      nombre='Lenovo Legion Y530'
      imagen='lenovo-legion'
      especificacion1='Procesador Intel® de 8ª generación Core™ i5-8300H'
      especificacion2='Sistema Operativo Windows 10 Home'
      especificacion3='Panalla 15,6" FHD (1920 x 1080) IPS (hasta 144 Hz,300 nits)'
      especificacion4='Graficos NVIDIA® GeForce® GTX 1050 Ti'
      especificacion5='Memoria Hasta 32 GB DDR4 2666 MHz'
     
      />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
