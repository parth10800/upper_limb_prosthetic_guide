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
        <p style={{
          fontSize: "150px;"
          }}>
          Upper Limb Prosthetic Guide
          </p> 
      </div>

      <div className="App"> 
      <div className="App-bg2">
        <p className='subtitles'>
          Preparing For Your First Visit
          </p> 
          <p>
          </p>
          <p className="textBody">
          Don’t be afraid to ask questions! Your prosthetist will ask you questions about your lifestyle and goals for your prosthesis.
          Have a list of goals ready to share with your prosthetist. 
          </p>
          <p  className="textBody">What are you planning to use your prosthesis for? What are some aspects that you value in your prosthesis (i.e appearance, functionality, durability, etc.)
          Be aware that the process can be lengthy and it will take several visits before you get to try on a prosthetic socket.
          </p> 

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
    </div>

    

    
  );
}

export default App;

