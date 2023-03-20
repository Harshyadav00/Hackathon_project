import React from "react";
import logo from "./logo.png";
import bg from './bro.svg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainBgColor h100">
      
      <nav class="navbar sticky-top mainBgColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{width:'20%'}}
              className="d-inline-block align-text-top"
            ></img>
          </a>
        </div>
      </nav>
      <div className="d-flex">
      <div>
        <img style={{width:'78%'}} src={bg} alt="bg"/>
      </div>
      <div
        style={{ height: "60vh" }}
        className="d-flex justify-content-center align-items-end flex-column"
      >
        <Link to="/hospitalLogin">
          <div className="homeButton registrationLogin">
            REGISTERATION DESK LOGIN
          </div>
        </Link>
        <Link to="/hospitalLogin">
          <div className="homeButton doctorLogin">DOCTOR LOGIN</div>
        </Link>
        <Link to="/patientLogin">
          <div className="homeButton patientLogin">PATIENT LOGIN</div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
