
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
  
  
    const handleButtonClick = () => {
      navigate('/PatientDashboard'); // Replace '/other-page' with the desired path
    };
  

  return (
    <div style={backgroundStyle}>
      <h1 className="welcome-heading">MEDICONNECT</h1>
      {/* <p>Trustworthy Connections for Exceptional Healthcare</p> */}
      <div className="container">
        <div className="form-container">
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>

            <button onClick={handleButtonClick} type="submit">Login</button>
          </form>

          <p>New member? Sign up as:</p>
          <button> Patient</button>
          <button> Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
