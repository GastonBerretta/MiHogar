import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NavBar } from '../Components/NavBar';
import { BarrioPrivPage } from '../pages/BarrioPrivPage';
import { CasaPage } from '../pages/CasaPage';
import { ComoBuscarHogarPage } from '../pages/ComoBuscarHogarPage';
import { DepartamentoPage } from '../pages/DepartamentoPage';
import { HomePage } from '../pages/HomePage';
import { IngresarPage } from '../pages/IngresarPage';
import { NosotrosPage } from '../pages/NosotrosPage';

export const AppRouter = () => {
    return (
        <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/departamentos" component={DepartamentoPage}/>  
          <Route exact path="/casas" component={CasaPage}/>
          <Route exact path="/barrio-privado" component={BarrioPrivPage}/>
          <Route exact path="/como-buscar-mi-hogar" component={ComoBuscarHogarPage}/>
          <Route exact path="/nosotros" component={NosotrosPage}/>
          <Route exact path="/ingresar" component={IngresarPage}/>
          <Redirect to="/" />
        </Switch>   
      </div>
    </Router>
    )
}
