import React from 'react'
import {Link} from "react-router-dom"
import '../styles/login.css'

export const IngresarPage = () => {
    return (
      <div>
        <div className="container mt-5" >
        <h1>Ingresa</h1>
          <div className="row justify-content-center mt-3" >
            <form className="col-6 align-self-center">
              <div className="form-group ">
                <label for="exampleInputEmail1">Mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Mail"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Mantener Sesion
                </label>
              </div>
              <div className="m-2">
              <Link to="/register" >
              ¿Aun no tenes una cuenta? Registrate
              </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
