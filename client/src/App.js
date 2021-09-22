import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home";



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
