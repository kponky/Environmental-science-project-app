import React from "react";
import logo from "../assets/Unijos Logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../Styles/navbar.css'
// import { HashLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="unijos logo" className="navlogo" />
          <h3>University of Jos</h3>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Departments</li>
          <li>Login</li>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </ul>
      </div>

      
    </nav>
  );
};

export default Navbar;
