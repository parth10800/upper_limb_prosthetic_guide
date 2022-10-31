import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from "react-router";
import HomePage from "./Components/HomePage";

const App = () => {

  return (
        <div className="container-fluid">
            <BrowserRouter>`
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
