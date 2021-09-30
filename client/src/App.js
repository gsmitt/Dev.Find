import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "../src/pages/Login/index"
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home";
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Dashboard from './pages/Dashboard';
import Cadastro from '../src/pages/Cadastro/index';
import Publicar from '../src/pages/Publicar/index';
import Layout from './components/Layout/index';
import GlobalStyles from './styles/GlobalStyles';
import Review from './components/Review'




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/explorar' component={Dashboard} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
          <Route path='/contato' component={Contato} />
          <Route path='/publicar-projeto' component={Publicar} />
        </Switch>
        {/* <Review /> */}
        {/* <GlobalStyles />
        <Route path='/perfil-usuario' component={Layout} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
