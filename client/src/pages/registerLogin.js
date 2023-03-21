import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import { redirect } from "react-router-dom";
import toastr from 'reactjs-toastr';

const RegisterLogin = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // event.preventDefault;
    if(username==='123456' && password==='123456'){
        <redirect to='/history' />
    } else {
        toastr.error('Incorrect useranme or passwqord');
    }
  }

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
          <form onSubmit={handleSubmit}
            style={{ height: "60vh", overflow: "auto" }}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <h3 style={{ fontWeight: "700" }}>Registerar Login</h3>
            <label
              style={{ fontWeight: "500" }}
              className="label"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
              Username <input />
            </label>

            <label
              style={{ fontWeight: "500" }}
              className="label"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
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

export default RegisterLogin;
