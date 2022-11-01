import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Upper Limb Prosthetic Guide</div>
           <ul className="nav-links">
              <Link to="/">Home </Link>
              <Link to="/find">Find </Link>
              <Link to="/prepare">Prepare </Link>
              <Link to="/compare">Compare </Link>
              <Link to="/insurance">Insurance </Link>
              <Link to="/resources">Resources </Link>
           </ul>
        </div>
  );

}