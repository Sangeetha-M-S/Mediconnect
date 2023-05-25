import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './Pages/Login/login';
import PatientDashboard from "./Pages/PatientDashboard/PatientDashboard";
import Patient from "./Pages/SignUp/patient"
import Doctor from "./Pages/SignUp/Doctor"

const App = () => {
  return (
    <>
      {/* <PatientDashboard/> */}
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/patientdashboard" element={<PatientDashboard />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/doctor" element={<Doctor />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
