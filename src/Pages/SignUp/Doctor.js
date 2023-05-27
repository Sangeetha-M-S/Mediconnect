import React, { useState } from 'react';
import { FaUserMd } from "react-icons/fa";
import "./style.css";

const Doctor = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    contact: '',
    education: '',
    houseName: '',
    locality: '',
    city: '',
    pin: '',
    email: '',
    specializations: '',
    currentWorking: ''
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setDoctorData({ ...doctorData, [name]: value });
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
      education,
      houseName,
      locality,
      city,
      pin,
      email,
      specializations,
      currentWorking
    } = doctorData;

    if (
      firstName &&
      age &&
      gender &&
      contact &&
      education &&
      houseName &&
      specializations &&
      currentWorking &&
      locality &&
      city &&
      pin
    ) {
      try {
        const res = await fetch(
          'https://mediconnect-2a58a-default-rtdb.firebaseio.com/doctorDataRecords.json',
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
              education,
              houseName,
              locality,
              city,
              pin,
              email,
              specializations,
              currentWorking
            })
          }
        );

        if (res.ok) {
          setDoctorData({
            firstName: '',
            middleName: '',
            lastName: '',
            age: '',
            gender: '',
            contact: '',
            education: '',
            houseName: '',
            locality: '',
            city: '',
            pin: '',
            email: '',
            specializations: '',
            currentWorking: ''
          });
          alert('Data Stored');
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
        <FaUserMd className="icon" />
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
              value={doctorData.firstName}
              name="firstName"
              placeholder="First name"
              required
            />
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.middleName}
              name="middleName"
              placeholder="middle name"
            />
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.lastName}
              name="lastName"
              placeholder="last name"
            />
          </label>
          <label className="label">
            Age
            <input
              type="number"
              className="input"
              value={doctorData.age}
              onChange={postUserData}
              name="age"
              placeholder=""
              required
            />
          </label>
          <label className="label">
            Gender
            <select
              className="input"
              onChange={postUserData}
              value={doctorData.gender}
              name="gender"
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
              value={doctorData.contact}
              name="contact"
              placeholder=""
              required
            />
          </label>
          <label className="label">
            Educational qualifications
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.education}
              name="education"
              required
            />
          </label>
          <label className="label">
            Address
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.houseName}
              name="houseName"
              placeholder="House name"
              required
            />
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.locality}
              name="locality"
              placeholder="Area"
              required
            />
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.city}
              name="city"
              placeholder="City/Village name"
              required
            />
            <input
              type="number"
              className="input"
              onChange={postUserData}
              value={doctorData.pin}
              name="pin"
              placeholder="pin-code"
              required
            />
          </label>
          <label className="label">
            Specialized In
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.specializations}
              name="specializations"
              required
            />
          </label>
          <label className="label">
            Current Working
            <input
              type="text"
              className="input"
              onChange={postUserData}
              value={doctorData.currentWorking}
              name="currentWorking"
              required
            />
          </label>
          <label className="label">
            Email
            <input
              type="email"
              className="input"
              onChange={postUserData}
              value={doctorData.email}
              name="email"
              placeholder=""
            />
          </label>
          <button
            type="submit"
            className="btn1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Doctor;
