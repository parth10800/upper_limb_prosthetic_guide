import React from "react";
import {Link} from "react-router-dom"
export const Compare = () => {
  return (
    <div>
      <div>
      <p className='subtitles'>
            Compare Products
          </p>
          <p className="textBody">
            What products would you like to compare?
          </p>
          <div id = "btnTwoCompares">
          <Link to="/etd">
            <button type="etd" name="formBtn" id="btnCompare">
            Electric Terminal Devices (ETDs)
            </button>
          </Link>
          <Link to="/bh">
            <button type="etd" name="formBtn" id="btnCompare">
            Bionic Hands
            </button>
          </Link>
          </div>
    </div>
    </div>
  );
};