import './App.css';
import React from "react";
import { NavBar } from "../src/components/Navbar";
import { Home } from "../src/pages/Home"

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
