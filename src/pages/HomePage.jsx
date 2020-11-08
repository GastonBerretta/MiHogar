import React from 'react'
import '../styles/home.css'

export const HomePage = () => {
    return (
        <div>
            <div className="buscador">
                <h1>Encontra tu lugar</h1>
                    <div className="buscador-box">
                        <h3>Todas tus oportunidades en un mismo sitio</h3>
                        <ul className="buscador-categoria">
                            <li>Comprar</li>
                            <li>Alquilar</li>
                            <li>Emprendimiento</li>
                            <li>Comercial</li>
                            <li>Temporal</li>
                        </ul>
                        <div className="buscador-select">
                            <select name="" id="">
                                <option value="">Departamento</option>
                                <option value="">Casa</option>
                                <option value="">Bario privado</option>
                                <option value="">Terreno</option>
                            </select>
                            <input type="text" placeholder="Busque por barrio o ciudad"/>
                            <button> <i class="fas fa-search-location"></i> Buscar</button>
                            <p className="ver-mas">Ver busqueda avanzada <i class="fas fa-angle-down"></i></p>
                        </div>
                    </div>
            </div>
            <div className="info-adicional row">
                <div className="col-4">
                    <i class="fas fa-home fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quae rerum sint, expedita repellat, ducimus consequuntur omnis numquam</p>
                </div>
                <div className="col-4">
                    <i class="fas fa-info fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quae rerum sint, expedita repellat, ducimus consequuntur omnis numquam</p>
                </div>
                <div className="col-4">
                    <i class="fab fa-safari fa-2x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quae rerum sint, expedita repellat, ducimus consequuntur omnis numquam</p>
                </div>
            </div>
        </div>
    )
}
