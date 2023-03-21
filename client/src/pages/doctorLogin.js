import React from "react";
import logo from './logo.png';

const DoctorLogin = () => {
  return (
    <div className="mainBgColor h100">
    <nav class="navbar sticky-top mainBgColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="./home">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "20%" }}
              className="d-inline-block align-text-top"
            ></img>
          </a>
        </div>
      </nav>
    <div className="mainBgColor font">
      <div>
        
        <form style={{height:'60vh', overflow:'auto'}} className="d-flex justify-content-center align-items-center flex-column">
        <h3 style={{fontWeight:'700'}}>Registerar Login</h3>
          <label style={{ fontWeight: "500" }} className="label">
            Username <input />
          </label>

          <label style={{ fontWeight: "500" }} className="label">
            Password <input type="password" />
          </label>

          <button style={{ padding: "5px" }} type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
    </div>
  );  
};

export default DoctorLogin;
