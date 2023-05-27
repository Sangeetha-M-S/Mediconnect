import React, { useState } from 'react';
// import bg from './images/bg.jpg';
import './login.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    userName: '',
    password: ''
  });
  const handlePatientClick = () => {
    navigate('/patient');
  };
  
  const handleDoctorClick = () => {
    navigate('/doctor');
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitData = async (event) => {
    event.preventDefault();
    console.log("Entered in the loop")
    const { userName, password } = formValues;
    console.log(setFormValues)
    if (userName && password) {
      try {
        const res = await fetch(
          'https://mediconnect-2a58a-default-rtdb.firebaseio.com/loginDataRecords.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName,
              password
            })
          }
        );

        if (res.ok) {
          setFormValues({
            userName: '',
            password: ''
          });
          alert('Data Stored');
          navigate('/patientdashboard')
        } else {
          throw new Error('Failed to store data');
        }
      } catch (error) {
        console.error(error);
        alert('Failed to store data');
      }
    } else {
      alert('Please fill in all the required fields');
    }
  };

  return (
    <div className='windowBackground'>
      <h1 className="welcome-heading">MEDICONNECT</h1>
      <p className="p-tag">A leading healthcare platform connecting patients and healthcare professionals.</p>
      <div className="container1">
        <div className="form-container1">
          <form   onSubmit={submitData}>
            <div className="input-group">
              <label htmlFor="userName" className="label1">
                UserName:
              </label>
              <input
                type="text"
                value={formValues.userName}
                name="userName"
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={formValues.password}
                name="password"
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" >
              Login
            </button>
          </form>

          <p>New member? Sign up as:</p>
          <button onClick={handlePatientClick}>Patient</button>
          <button onClick={handleDoctorClick}>Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
