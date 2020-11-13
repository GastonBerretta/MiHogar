import React,{useState} from 'react'
import '../styles/home.css'

export const HomePage = () => {
    const [busqueda, setbusqueda] = useState(false)
    const handleChangeSerch=(e)=>{
        setbusqueda(!busqueda)
        e.preventDefault()
        if(busqueda){
            document.querySelector(".busqueda-avanzada").style.display="none"
            document.querySelector(".buscador-box").style.height="360px"
        }else{
            document.querySelector(".buscador-box").style.height="500px"
            document.querySelector(".busqueda-avanzada").style.display="flex"
        }
    }
    return (
        <div>
            <div className="buscador">
                <h1>Encontra tu lugar</h1>
                    <div className="buscador-box">
                        <h3>Todas tus oportunidades en un mismo sitio</h3>
                        <ul className="buscador-categoria">
                            <li><button className="buscador-btn">Comprar</button> </li>
                            <li><button className="buscador-btn">Alquilar</button></li>
                            <li><button className="buscador-btn">Emprendimiento</button></li>
                            <li><button className="buscador-btn">Comercial</button></li>
                            <li><button className="buscador-btn">Temporal</button></li>
                        </ul>
                        <div className="buscador-select">
                            <select name="" id="">
                                <option value="">Departamento</option>
                                <option value="">Casa</option>
                                <option value="">Bario privado</option>
                                <option value="">Terreno</option>
                            </select>
                            <input type="text" placeholder="Busque por barrio o ciudad"/>
                            <button className="buton-buscador"> <i class="fas fa-search-location"></i></button>
                            <div className="row justify-content-center">
                            <button className="btn btn-outline-primary mt-2" onClick={handleChangeSerch}>{/*  <p className="ver-mas" > */}Ver busqueda avanzaasdda <i class="fas fa-angle-down"></i>{/* </p> */}</button>
                            </div>
                        </div>
                        <div className="busqueda-avanzada row ">
                            <div className="col-4">
                                <h3>Ambietes</h3>
                                <div className=" row justify-content-center">
                                <button className="btn btn-outline-primary m-1 btn-sm">1</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">2</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">3</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">4</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">+</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3 >Precio</h3>
                                <div className=" row justify-content-center" >
                                    <input className="mt-1" type="number"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3>Baños</h3>
                                <div className=" row justify-content-center">
                                <button className="btn btn-outline-primary m-1 btn-sm">1</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">2</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">3</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">4</button>
                                <button className="btn btn-outline-primary m-1 btn-sm">+</button>
                                </div>
                               

                            </div>
                            
                        </div>

                    </div>
            </div>
            <div className="info-adicional row mb-5 mt-5">
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
