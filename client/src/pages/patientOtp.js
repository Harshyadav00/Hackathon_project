import React from 'react'
import logo from './logo.png';

const patientOtp = () => {
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

    <div className='' >
        <form style={{height:'60vh'}} className=' d-flex justify-content-center align-items-center  flex-column'>
          <h3 style={{fontWeight:'700'}}>Verification</h3>
            <label className='label'>Enter OTP <input /> </label>
            <button type='submit' >Submit</button>
        </form>
    </div>
</div>
  );
};

export default patientOtp;