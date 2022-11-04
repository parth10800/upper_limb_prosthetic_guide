import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Find } from "./components/Pages/Find";
import { Prepare } from "./components/Pages/Prepare";
import { Compare } from "./components/Pages/Compare";
import { Insurance } from "./components/Pages/Insurance";
import { Resources } from "./components/Pages/Resources";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/find" element={<Find/>} />
            <Route exact path="/prepare" element={<Prepare/>} />
            <Route exact path="/compare" element={<Compare/>} />
            <Route exact path="/insurance" element={<Insurance/>} />
            <Route exact path="/resources" element={<Resources/>} />
            
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
