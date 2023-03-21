import React from 'react';
import logo from "./logo.png";
const patientList = () =>
{
    return(
        <div>
              <div className="mainBgColor h100"> </div>
              <nav class="navbar sticky-top mainBgColor">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              style={{width:'20%'}}
              className="d-inline-block align-text-top"
            ></img>
          </a>
        </div>
      </nav>
        <table>
            <tr className="attri-dec">
                <th>S.NO.</th>
                <th>PATIENT REGISTERATION</th>
                <th> DESCRIPTION</th>
            </tr>
            <tr className="list">
            <th>1.</th>
            <th>AJAY KUMAR</th>
            <th> ENT </th>
            </tr>
            <tr className="list">
            <th>2.</th>
            <th>AJAY KUMAR</th>
            <th> ENT </th>
            </tr>
            <tr className="list">
            <th>3.</th>
            <th>AJAY KUMAR</th>
            <th> ENT </th>
            </tr>
            <tr className="list">
            <th>4.</th>
            <th>AJAY KUMAR</th>
            <th> ENT </th>
            </tr>
            <tr className="list">
            <th>5.</th>
            <th>AJAY KUMAR</th>
            <th> ENT </th>
            </tr>
            <tr className="list">
            <th></th>
            <th></th>
            <th>  </th>
            </tr>
            <tr className="list">
            <th></th>
            <th></th>
            <th>  </th>
            </tr>
            <tr className="list">
            <th></th>
            <th></th>
            <th> </th>
            </tr>


        </table>
        </div>
    );
};
export default patientList;