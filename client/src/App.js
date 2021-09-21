import './App.css';
import React from "react";
import { NavBar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home"


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>

    </div>
  );
}

export default App;
