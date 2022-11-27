import React from "react";
import mapImage from "./map_sample.jpg";

export const Find = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <p className='subtitlesLeft'>
            <h1>Finding a Prosthetist Near You</h1>
          </p>
          <p>
          </p>
          <p className="textBodyLeft">
          Step 1: Research clinics in your area
          </p>
          <p className="textBodyLeft">
          Step 2: Verify the clinic has an upper limb specialist
          </p>
          <p className="textBodyLeft">Step 3: Contact the clinic to inquire about insurance coverage and appointment availability
          </p>
          <p className="textBodyLeft">
          Step 4: Set up your first appointment with your clinic          </p>

        </div>

        <div className="col">
          <img className="img-fluid" src={mapImage}/>
        </div>
      </div>
    </div>
  );
};
