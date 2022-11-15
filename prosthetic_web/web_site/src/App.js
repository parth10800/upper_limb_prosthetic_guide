import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Find } from "./components/Pages/Find";
import { Prepare } from "./components/Pages/Prepare";
import { Compare } from "./components/Pages/Compare";
import { Insurance } from "./components/Pages/Insurance";
import { Resources } from "./components/Pages/Resources";
import { Etd } from "./components/Pages/Etd";
import { Bh } from "./components/Pages/Bh";

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
            <Route exact path="/etd" element={<Etd/>} />
            <Route exact path="/bh" element={<Bh/>} />
            
          </Routes>
          
        </div>
      </Router>

      {/* <div className="App">
      <NavBar />
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
          </p>
          <p className="textBody">
            Have a list of goals ready to share with your prosthetist. What are you planning to use your prosthesis for?
          </p>
          <p className="textBody">What are some aspects that you value in your prosthesis (i.e appearance, functionality, durability, etc.)
            Be aware that the process can be lengthy and it will take several visits before you get to try on a prosthetic socket.
          </p>
        </div>
        <div className="App-bg2">
          <p className='subtitles'>
            About Us
          </p>
          <p>
          </p>
          <p className="textBody">
            Our Goal
          </p>
          <p className="textBody">
            Welcome to the upper limb prosthetic guide. Our goal is to provide a central platform to introduce those with upper limb loss into the complex world of prosthetics. We hope this website provides some helpful information to guide you towards your first prosthesis.
          </p>
          <p className="textBody">
            Who are we?
          </p>
          <p className="textBody">
            We are a group of students from Northeastern University. With the help of experts in the field, we have collected the basic information about getting your first prosthesis along with a comparison tool for the current devices in the market.
          </p>

        </div>

      </div>
    </div>
     */}
    </>

    
  );
}

export default App;
