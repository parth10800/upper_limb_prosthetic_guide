import React from "react";
import "./styles.css";
//import Find from "./Components/Find";
import Find from "./Components/Find";
import HomePage from './Components/HomePage';
import Prepare from "./Components/Prepare";
import Compare from "./Components/Compare";
import Resources from "./Components/Resources";
import Nav from "./Components/Nav/";
import Insurance from "./Components/Insurance";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<HomePage/>} />
          <Route path='/find' exact={true} element={<Find/>} />
          <Route path="/prepare" exact={true} element={<Prepare/>} />
          <Route path="/insurance" exact={true} element={<Insurance/>} />
          <Route path="/compare" exact={true} element={<Compare/>} />
          <Route path="/resources" exact={true} element={<Resources/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;