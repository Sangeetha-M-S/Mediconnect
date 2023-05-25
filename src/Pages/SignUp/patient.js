
import React,{ useState,useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const Patient=()=>{
  const [firstName,setFirstName]=useState("");
  const [middleName,setMiddleName]=useState("");
  const [lastName,setLastName]=useState("");
  const [age,setAge]=useState(0);
  const [gender,setGender]=useState("");
  const [contact,setContact]=useState("");
  const [bloodGroup,setBloodGroup]=useState("");
  const [houseName,setHouseName]=useState("");
  const [locality,setLocality]=useState("");
  const [city,setCity]=useState("");
  const [pin,setPin]=useState("");
  const [email,setEmail]=useState("");
  
  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
    console.log(firstName);
  }
  const handleMiddleName=(e)=>{
    setMiddleName(e.target.value);
    console.log(middleName);
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value);
    console.log(lastName);
  }
  const handleAge=(e)=>{
    setAge(e.target.value);
    console.log(age)
  }
  const handleGender=(e)=>{
    setGender(e.target.value);
    console.log(gender)
  }
  const handleContact=(e)=>{
    setContact(e.target.value);
    console.log(contact)
  }
  const handleBloodGroup=(e)=>{
    setBloodGroup(e.target.value);
    console.log(bloodGroup)
  }
  const handleHouseName=(e)=>{
    setHouseName(e.target.value);
    console.log(houseName)
  }
  const handleLocality=(e)=>{
    setLocality(e.target.value);
    console.log(locality)
  }
  const handleCity=(e)=>{
    setCity(e.target.value);
    console.log(city)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
    console.log(email)
  }
  const handlePinCode=(e)=>{
    setPin(e.target.value);
    console.log(pin)
  }
  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  useEffect(() => {
    console.log(middleName);
  }, [middleName]);

  useEffect(() => {
    console.log(lastName);
  }, [lastName]);

  useEffect(() => {
    console.log(age);
  }, [age]);

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  useEffect(() => {
    console.log(bloodGroup);
  }, [bloodGroup]);
  
  useEffect(() => {
    console.log(houseName);
  }, [houseName]);

  useEffect(() => {
    console.log(locality);
  }, [locality]);

  useEffect(() => {
    console.log(city);
  }, [city]);

  useEffect(() => {
    console.log(pin);
  }, [pin]);

  useEffect(() => {
    console.log(email);
  }, [email]);


  
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert('Successfully submitted');
    console.log(alert)
  }

  
  return (
    <div className="main">
      <div className="header-signup">
       <FaUserCircle className="icon"/><span className="profile">My Profile</span>
      </div>
      <div>
        <form className="form">
          <label className="label">
            UserName
            <input type="text" className="input" onChange={handleFirstName} name="patient_name" placeholder="First name" required />
            <input type="text" className="input" onChange={handleMiddleName} name="patient_name" placeholder="middle name" />
            <input type="text" className="input" onChange={handleLastName} name="patient_name" placeholder="last name" />
          </label>
          <label className="label">
            Age
            <input type="number" className="input" value={age} onChange={handleAge} name="patient_age" placeholder="" required />
          </label>
          <label className="label">
            Gender
            <select className="input" onChange={handleGender} required>
              <option value="">Select an option</option>
              <option value="f">Female</option>
              <option value="m">Male</option>
              <option value="o">Others</option>
            </select>
          </label>
          <label className="label">
            Contact Number
            <input type="text" className="input" onChange={handleContact} name="patient_number" placeholder="" required />
          </label>        
          <label className="label">
            Blood Group
            <select className="input" onChange={handleBloodGroup} required>
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
            <input type="text" className="input" onChange={handleHouseName} name="patient_house_name" placeholder="House name" required />
            <input type="text" className="input" onChange={handleLocality} name="patient_house_locality" placeholder="Area" required />
            <input type="text" className="input" onChange={handleCity} name="patient_house_city" placeholder="City/Village name" required />
            <input type="number" className="input" onChange={handlePinCode} name="patient_pin" placeholder="pin-code" required />
          </label>
          <label className="label">
            Email
            <input type="email" className="input" onChange={handleEmail} name="patient_email" placeholder=""></input>
          </label>
          <button type="submit" className="btn1" onChange={handleSubmit} >Submit</button>
        </form>
      </div>
    </div>
  )
  
  
}

export default Patient
