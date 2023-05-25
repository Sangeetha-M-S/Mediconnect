
import React from 'react';
import bg from './images/bg.jpg';
import './login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';



const WelcomePage = () => {
  const backgroundStyle = {
  

    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
  };

    const navigate = useNavigate();
  
  
    const handleLoginClick = () => {
      navigate('/patientdashboard'); 
    };

    const handlePatientClick = () => {
      navigate('/patient'); 
    };

    const handleDoctorClick = () => {
      navigate('/doctor'); 
    };
  

  return (
    <div style={backgroundStyle}>
      <h1 className="welcome-heading">MEDICONNECT</h1>
      {/* <p>Trustworthy Connections for Exceptional Healthcare</p> */}
      <p className="p-tag"> A leading healthcare platform connecting patients and healthcare professionals.</p>
      <div className="container1">
        <div className="form-container1">
          <form>
            <div className="input-group">
              <label htmlFor="username" className='label1'>Username:</label>
              <input type="text" id="username" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>

            <button onClick={handleLoginClick} type="submit">Login</button>
          </form>

          <p>New member? Sign up as:</p>
          <button onClick={handlePatientClick}> Patient</button>
          <button onClick={handleDoctorClick}> Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;