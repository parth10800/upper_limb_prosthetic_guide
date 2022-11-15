import React from "react";
import {Link} from "react-router-dom"

export const Home = () => {
  return (
    <div className="App"> 
      <div className="App-header">
        <p style={{
          fontSize: "150px;"
          }}>
          Upper Limb Prosthetic Guide
          </p> 
      </div>
  
      <div className="App-bg2">
        <p className='subtitles'>
          <p>
            Do you have a prosthetist yet?
          </p>
          </p> 
          <p className="link">
          <Link to="/find">Find a Prosthetist Near Me!</Link>
          </p>  
      </div>
      <div className="App-bg2">
        <p className='subtitles'>
          <p>
            Prepare ahead before meeting with your prosthetist.
          </p>
          </p> 
          <p className="link">
          <Link to="/prepare">Learn more about your first visit</Link>
          
          </p>  
      </div>
      <div className="App-bg2">
        <p className='subtitles'>
          <p>
          There are over 22 different terminal devices on the market. We touch on the most common and compare them. 
          </p>
          </p> 
          <p className="link">
          <Link to="/compare">Check out our comparison tool</Link>
          </p>  
      </div>
      <div className="App-bg2">
        <p className='subtitles'>
          <p>
          Insurance for prosthetics is complex with lots of layers.
          </p>
          </p> 
          <p className="link">
          <Link to="/insurance">Learn about insurance basics</Link>
          </p>  
      </div>
      <div className="App-bg2"> 
          <p className="link">
          <Link to="/resources">Click here for additional resources</Link>
          </p>  
      </div>
  
   
    </div>
  );
};