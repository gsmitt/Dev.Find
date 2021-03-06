import '../App.css';
import React from "react";
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "../pages/Login/index"
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import Sobre from '../pages/Sobre';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro/index';
import Publicar from '../pages/Publicar/index';
import Profile from '../pages/Profile/index';
import TypeStyles from '../styles/GlobalStyles';
import { EditarPerfil } from "../components/EditarPerfil";
import { ModalContratar } from "../components/ModalContratar";
import NotFound from '../pages/NotFound';
import TesteDashboard from '../pages/TesteDashboard';

export function Routes() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/explorar' component={Dashboard} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/publicar-projeto' component={Publicar} />
      </Switch>
      <TypeStyles />
      {/* <Route path='/edit-modal' component={EditModal} /> */}
      <Route path='/perfil-usuario/:id' component={Profile} />
      {/* <Route path='/edit-profile' component={EditProfile} /> */}
      <Route path='/editar-perfil' component={EditarPerfil} />
      
      <Route path='/modal-contratar' component={ModalContratar} />
      <Route path='/teste-dashboard' component={TesteDashboard} />
      <Route path='/not-found' component={NotFound} />

      <Footer />
    </Router>
  </>
  );
}
