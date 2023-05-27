import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import PatientProfile from "./patientProfile";  
import './style.css';

const Patient = () => {
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    contact: '',
    bloodGroup: '',
    houseName: '',
    locality: '',
    city: '',
    pin: '',
    email: ''
  });

  const [dataStored, setDataStored] = useState(false);

  const postUserData = (event) => {
    const { name, value } = event.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      contact,
      bloodGroup,
      houseName,
      locality,
      city,
      pin,
      email
    } = patientData;

    if (
      firstName &&
      age &&
      gender &&
      contact &&
      bloodGroup &&
      houseName &&
      locality &&
      city &&
      pin
    ) {
      try {
        const res = await fetch(
          'https://mediconnect-2a58a-default-rtdb.firebaseio.com/patientDataRecords.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstName,
              middleName,
              lastName,
              age,
              gender,
              contact,
              bloodGroup,
              houseName,
              locality,
              city,
              pin,
              email
            })
          }
        );

        if (res.ok) {
          setPatientData({
            firstName: '',
            middleName: '',
            lastName: '',
            age: '',
            gender: '',
            contact: '',
            bloodGroup: '',
            houseName: '',
            locality: '',
            city: '',
            pin: '',
            email: ''
          });
          setDataStored(true);
          alert('Data Stored');
          navigate('/patientprofile'); // Redirect to patient profile page
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
    <div className="main">
      <div className="header-signup">
        <FaUserCircle className="icon" />
        <span className="profile">My Profile</span>
      </div>
      <div>
        <form className="form" onSubmit={submitData}>
        <label className="label">
              UserName
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="firstName"
                value={patientData.firstName}
                placeholder="First name"
                required
              />
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="middleName"
                value={patientData.middleName}
                placeholder="Middle name"
              />
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="lastName"
                value={patientData.lastName}
                placeholder="Last name"
              />
            </label>
            <label className="label">
              Age
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="age"
                value={patientData.age}
                placeholder=""
                required
              />
            </label>
            <label className="label">
              Gender
              <select
                className="input"
                onChange={postUserData}
                name="gender"
                value={patientData.gender}
                required
              >
                <option value="">Select an option</option>
                <option value="f">Female</option>
                <option value="m">Male</option>
                <option value="o">Others</option>
              </select>
            </label>
            <label className="label">
              Contact Number
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="contact"
                value={patientData.contact}
                placeholder=""
                required
              />
            </label>
            <label className="label">
              Blood Group
              <select
                className="input"
                onChange={postUserData}
                name="bloodGroup"
                value={patientData.bloodGroup}
                required
              >
                <option value="">Select an option</option>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">B+</option>
                <option value="4">B-</option>
                <option value="5">AB+</option>
                <option value="6">AB-</option>
                <option value="7">O+</option>
                <option value="8">O-</option>
              </select>
            </label>
            <label className="label">
              Address
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="houseName"
                value={patientData.houseName}
                placeholder="House name"
                required
              />
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="locality"
                value={patientData.locality}
                placeholder="Area"
                required
              />
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="city"
                value={patientData.city}
                placeholder="City/Village name"
                required
              />
              <input
                type="text"
                className="input"
                onChange={postUserData}
                name="pin"
                value={patientData.pin}
                placeholder="Pin code"
                required
              />
            </label>
            <label className="label">
              Email
              <input
                type="email"
                className="input"
                onChange={postUserData}
                name="email"
                value={patientData.email}
                placeholder=""
              />
            </label>
          <button type="submit" className="btn1">
            Submit
          </button>
        </form>
      </div>

      {dataStored && <PatientProfile data={patientData} />}
    </div>
  );
};

export default Patient;

