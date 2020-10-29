import React from 'react'
import '../styles/home.css'
import {   
    Link,
  } from "react-router-dom";
  
export const NavBar = () => {
    return (
        
            <nav class="nav">
                <div className="nav-izquierda">
                    <Link to="/" className="nav-link active" >Mi Hogar</Link>
                </div>
                <div className="nav-derecha">
                    <Link to="/casas" className="nav-link active" >Casas</Link>
                    <Link to="/departamentos" className="nav-link active" >Departamento</Link>
                    <Link to="/barrio-privado" className="nav-link active" >Barrio Privado</Link>
                    <Link to="/como-buscar-mi-hogar"  className="nav-link active">Como Buscar Hogar </Link>
                    <Link to="/nosotros" className="nav-link active" >Nosotros</Link>
                    <Link to="/ingresar" className="nav-link active" id="ingresar">Ingresar</Link>
                </div>
            </nav>
  
    )
}
