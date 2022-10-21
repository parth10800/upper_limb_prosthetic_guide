import logo from './logo.svg';
//import Webimage from "./WebImage"

import './App.css';
import React, {Component} from 'react';
import NavBar from './navbar';


function App() {
  return (
    <div className="App"> 
    <NavBar/>
      <div className="App-header">
        <p>
          Upper Limb Prosthetic Guide   
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </div>
      <div className="App-header">
        <span className="Controls">
          <button><strong>B</strong></button>
          <button><em>I</em></button>
          <button><u>U</u></button>
        </span>
        <textarea rows="5" className="Text" />
      </div>
    </div>
  );
}

export default App;

