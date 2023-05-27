import React from 'react';

const PatientProfile = ({ data }) => {
  return (
    <div>
      <h2>Patient Profile</h2>
      <p>First Name: {data.firstName}</p>
      <p>Middle Name: {data.middleName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Contact: {data.contact}</p>
      <p>Blood Group: {data.bloodGroup}</p>
      <p>House Name: {data.houseName}</p>
      <p>Locality: {data.locality}</p>
      <p>City: {data.city}</p>
      <p>Pin: {data.pin}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default PatientProfile;
