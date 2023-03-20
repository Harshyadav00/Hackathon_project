import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import HospitalLogin from './pages/hospitalLogin';
import PatientLogin from './pages/patientLogin';
import PatientOtp from './pages/patientOtp';
import History from './pages/History';
import Prescription from './pages/prescription';

function App() {
  return (
    <Router>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/hospitalLogin' element={<HospitalLogin/>} />
		<Route path='/patientLogin' element={<PatientLogin/>} />
		<Route path='/patientotp' element={<PatientOtp/>}/>
		<Route path='/history' element={<History/>}/>
		<Route path='/prescription' element={<Prescription/>}/>
		{/* <Route path='/events' component={Events} /> */}
	</Routes>
	</Router>
  );
};

export default App;
