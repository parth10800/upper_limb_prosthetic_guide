import logo from './logo.svg';
//import Webimage from "./WebImage"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require(process.env.PUBLIC_URL+"./ulpg_logo.png")} alt="ULPG Logo" />
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
        
      </header>
      <header className="App-header">
          <span className="Controls">
            <button><strong>B</strong></button>
            <button><em>I</em></button>
            <button><u>U</u></button>
          </span>
          <textarea rows="5" className="Text" />
          </header>
    </div>
  );
}

export default App;

