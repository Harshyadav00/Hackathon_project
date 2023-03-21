import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import DoctorLogin from './pages/doctorLogin';
import PatientLogin from './pages/patientLogin';
import PatientOtp from './pages/patientOtp';
import History from './pages/History';
import Prescription from './pages/prescription';
import RegisterLogin from './pages/registerLogin';

function App() {
  return (
    <Router>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/doctorLogin' element={<DoctorLogin/>} />
		<Route path='/registerLogin' element={<RegisterLogin />} />
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
