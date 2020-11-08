import React from 'react'
import {Link} from "react-router-dom"
export const IngresarPage = () => {
    return (
        <>
        <h1>Ingresa</h1>
      <div className="container mb-5">
        <div className="row  justify-content-center">
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
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Mantener Seision
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
      </>
    );
}
