import React from 'react'
import logo from './logo.png';


const patientLogin = () => {
  return (
    <div className='mainBgColor h100 font'>
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
    
    <div style={{height:'60vh'}} className='mainBgColor d-flex justify-content-center align-items-center flex-column'>
        <div className='' >
            <form className=' d-flex justify-content-center align-items-center h100 flex-column'>
                <label className='label'>   <input style={{textAlign: "center",}} placeholder='Enter your Unique Id' /> </label>
                <button style={{padding : "5px",}} type='submit' >Submit</button>

            </form>
        </div>
    </div>
    </div>
  );
};

export default patientLogin;