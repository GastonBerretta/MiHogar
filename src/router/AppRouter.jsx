import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Buscados } from '../Components/Buscados';
import { Footer } from '../Components/Footer';
import { NavBar } from '../Components/NavBar';
import { BarrioPrivPage } from '../pages/BarrioPrivPage';
import { CasaPage } from '../pages/CasaPage';
import { ComoBuscarHogarPage } from '../pages/ComoBuscarHogarPage';
import { DepartamentoPage } from '../pages/DepartamentoPage';
import { HomePage } from '../pages/HomePage';
import { IngresarPage } from '../pages/IngresarPage';
import { NosotrosPage } from '../pages/NosotrosPage';
import { RegisterPage } from '../pages/RegisterPage';

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
          <Route exact path="/quienes-somos" component={NosotrosPage}/>
          <Route exact path="/objetivo" component={NosotrosPage}/>
          <Route exact path="/contacto" component={NosotrosPage}/>
          <Route exact path="/ingresar" component={IngresarPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Redirect to="/" />
        </Switch> 
        <Buscados/>
        <Footer/>  
      </div>
    </Router>
    )
}
