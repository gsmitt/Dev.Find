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
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/explorar' component={Dashboard} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
        </Switch> */}
        <Layout />

        <GlobalStyles />
        <Footer />
      </Router>
    </>
  );
}

export default App;
