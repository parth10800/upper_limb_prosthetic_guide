import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Upper Limb Prosthetic Guide
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/find"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Find
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/prepare"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Prepare
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/compare"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Compare
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/insurance"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Insurance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/resources"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
