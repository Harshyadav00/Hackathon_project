import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const History = () => {
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
            <div className="d-flex"><p>NAME:</p><p>John Meher</p></div>
            <div className="d-flex"><p>AGE:</p><p>35</p></div>
            <div className="d-flex"><p>GENDER:</p><p>M</p></div>
            
            
            
          </div>
        </div>
        <table className="pt-5" style={{ width: "100%" }}>
          <tr className="p-5">
            <th className="attri-dec">DATE</th>
            <th className="attri-dec">SYMPTOMS/DISEASE</th>
            <th className="attri-dec">MEDICINES</th>
            <th className="attri-dec">TESTS</th>
          </tr>
          <tr className="p-5">
            <td className="attri-dec">19-03-23</td>
            <td className="attri-dec">Fever</td>
            <td className="attri-dec">
              <ul>
                <li>Paracetamol</li>
                <li>Acetaminophen</li>
              </ul>
            </td>
            <td className="attri-dec">None</td>
          </tr>
          <tr className="p-5">
            <td className="attri-dec">21-03-23</td>
            <td className="attri-dec">Dengue</td>
            <td className="attri-dec">
              <ul>
                <li>Acetaminophen</li>
              </ul>
            </td>
            <td className="attri-dec">None</td>
          </tr>
        </table>
        <div >
          <Link className="attri-dec">VIEW MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default History;
