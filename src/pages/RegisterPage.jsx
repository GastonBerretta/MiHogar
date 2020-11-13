import React from 'react'
import {Link} from "react-router-dom"

export const RegisterPage = () => {
    return (
        <div>
            <div className="container mt-4">
            <h1>Registrate</h1>
        <div className="row  justify-content-center mb-4">
          <form className="col-6 align-self-center">
          <div className="form-group ">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group ">
              <label for="exampleInputEmail1">Mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Mail"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <div className="m-2">
              <Link to="/ingresar" >
              ¿Ya tienes una cuenta? Ingresá
              </Link>
            </div>
            <button type="submit" className="btn btn-primary ">
              Registrarse
            </button>
          </form>
        </div>
      </div>
        </div>
    )
}
