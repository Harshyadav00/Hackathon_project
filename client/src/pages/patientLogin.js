import React from 'react'

const patientLogin = () => {
  return (
    <div className='mainBgColor h100'>
        <div className='' >
            <form className=' d-flex justify-content-center align-items-center h100 flex-column'>
                <label className='label'>  Enter your aadhar no. <input /> </label>
                <button type='submit' >Submit</button>
            </form>
        </div>
    </div>
  );
};

export default patientLogin;