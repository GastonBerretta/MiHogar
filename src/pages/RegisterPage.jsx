import React from 'react'

export const RegisterPage = () => {
    return (
        <div>
            <h1>Registrate</h1>
            <div className="container mb-5">
        <div className="row  justify-content-center">
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
            <div>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </form>
        </div>
      </div>
        </div>
    )
}
