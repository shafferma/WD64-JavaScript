import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavbarComponent from "./components/Navbar";
import LoginComponent from "./components/Login";


function App() {
  return (
    <div className="App">
        <NavbarComponent />
      <div id="wrapper">
        <LoginComponent />

      </div>
    </div>
  );
}

export default App;
