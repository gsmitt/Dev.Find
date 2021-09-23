import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "../src/pages/Login/index"
import { Dashboard } from "../src/pages/Dashboard/index"
import { Cadastro } from "../src/pages/Cadastro/index"
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home";
import { EditProfile } from "../src/pages/EditProfile"
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/explorar' component={Dashboard} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} /> */}
          <EditProfile></EditProfile>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
