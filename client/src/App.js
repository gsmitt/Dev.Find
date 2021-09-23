import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home";
import {GoogleButton} from "./components/GoogleButton"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
