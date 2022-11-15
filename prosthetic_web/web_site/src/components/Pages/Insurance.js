import React from "react";
import insuranceImage from "./insurance.jpg";

export const Insurance = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <p className='subtitlesLeft'>
            Insurance Basics
          </p>
          <p>
          </p>
          <p className="textBodyLeft">
          Each prosthetist device has an associated L-code.
          </p>
          <p className="textBodyLeft">
          The prosthetist submits the proper L-codes associated to your device to the insurance company for approval.
          </p>
          <p className="textBodyLeft">If your request is denied by insurance, you can appeal. 
          However, this is a very lengthy process. 
          </p>
        </div>

        <div className="col">
          <img className="img-fluid" src={insuranceImage}/>
        </div>
      </div>
    </div>
  );
};

{/* <div >
      <p className='subtitlesLeft'>
            Insurance Basics
          </p>
          <p>
          </p>
          <p className="textBodyLeft">
          Each prosthetist device has an associated L-code.
          </p>
          <p className="textBodyLeft">
          The prosthetist submits the proper L-codes associated to your device to the insurance company for approval.
          </p>
          <p className="textBodyLeft">If your request is denied by insurance, you can appeal. 
          However, this is a very lengthy process. 
          </p>
    </div> */}
