import React from 'react'

const patientLogin = () => {
  return (
    <div className='mainBgColor h100'>
        <div className='' >
            <form className=' d-flex justify-content-center align-items-center h100 flex-column'>
                <label className='label'>   <input style={{textAlign: "center",}} placeholder='Enter your Unique Id' /> </label>
                <button style={{padding : "5px",}} type='submit' >Submit</button>
            </form>
        </div>
    </div>
  );
};

export default patientLogin;