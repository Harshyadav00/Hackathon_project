import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='mainBgColor h100' >
            <div className='col-6' >
                <div className='col-12'></div>
            </div>
            <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-end flex-column">
                <Link to='/hospitalLogin' >
                    <div className='homeButton registrationLogin'>
                        REGISTERATION DESK LOGIN
                    </div>
                </Link>
                <Link to='/hospitalLogin' >
                    <div className='homeButton doctorLogin'>
                        DOCTOR LOGIN
                    </div>
                </Link>
                <Link to='/patientLogin' >
                    <div className='homeButton patientLogin'>
                        PATIENT LOGIN
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Home;