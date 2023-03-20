import React from 'react'

import { Link } from "react-router-dom";
import logo from "./logo.png";

const Prescription = () => {
  return (
    <div>
      <nav class="navbar sticky-top mainBgColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "10%" }}
              className="d-inline-block align-text-top"
            ></img>
          </a>
        </div>
      </nav>
      <div className="mainBgColor history font h100">
        <div className="d-flex align-items-center">
          <div>
            <img
              className="patientPhoto"
              src={logo}
              alt="patient's photo"
            ></img>
          </div>
          <div className="ps-5 Details">
            <p>NAME:</p>
            <p>AGE:</p>
            <p>DATE:</p>
          </div>
          <div  className="ps-5 Details">
            <p>PATIENT NUMBER:</p>
            <p>GENDER:</p>
          </div>
        </div>
        <table className="pt-5" style={{ width: "100%" }}>
          <tr className="p-5">
            <th className="attri-dec">SYMPTOMS/DISEASE</th>
            <th className="attri-dec">MEDICINES</th>
            <th className="attri-dec">TESTS</th>
          </tr>
        </table>
        <div>
          <Link>PREVIOUS RECORDS</Link>
          <Link>SAVE</Link>
          <Link>PRINT</Link>
        </div>
      </div>
    </div>
  );
};

export default History;
