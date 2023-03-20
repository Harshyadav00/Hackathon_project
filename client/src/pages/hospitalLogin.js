import React from 'react'

const HospitalLogin = () => {
    return (
        <div className='mainBgColor h100'> 
            <div >
                <form  className='d-flex justify-content-center align-items-center h100 flex-column'>
                    <label className='label' >Username  <input /></label>
                   
                    <label className='label' >Password <input type='password' /></label>
                    
                    <button type='submit'  >Enter</button>
                </form>
            </div>

        </div>
    );
};




export default HospitalLogin;
