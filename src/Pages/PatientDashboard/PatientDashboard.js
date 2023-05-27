import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './PatientDashboard.css';

const MAX_COUNT = 5;

const PatientDashboard = () => {
  const [patientDashboardData, setPatientDashboardData] = useState({
    problem: '',
    doctor: '',
    uploadedFiles: []
  });

  const { problem, doctor, uploadedFiles } = patientDashboardData;

  const handleUploadFiles = (event) => {
    const files = event.target.files;
    let limitExceeded = false;
    let uploaded = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);

        if (uploaded.length === MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          limitExceeded = true;
          break;
        }
      }
    }

    if (!limitExceeded) {
      setPatientDashboardData({ ...patientDashboardData, uploadedFiles: uploaded });
    }
  };

  const postUserData = (event) => {
    const { name, value } = event.target;
    setPatientDashboardData({ ...patientDashboardData, [name]: value });
  };

  // Rest of the code remains the same...

  const submitData = async (event) => {
    event.preventDefault();

    if (problem && doctor && uploadedFiles.length >= 0) {
      try {
        const res = await fetch('https://mediconnect-2a58a-default-rtdb.firebaseio.com/patientDashboardRecords.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(patientDashboardData)
        });

        if (res.ok) {
          setPatientDashboardData({
            problem: '',
            doctor: '',
            uploadedFiles: []
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
    <>
      <form onSubmit={submitData}>
        {/* Header */}
        <header className="header-dashboard">
          <Navbar expand="lg" variant="dark" style={{ background: '#03396c' }}>
            <Navbar.Brand>My Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#PatientDashboard">Dashboard</Nav.Link>
                <Nav.Link href="#post">Post</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>

        {/* Section-1 */}
        <div className="content">
          {/* Problem Text */}
          <label htmlFor="problem" className="problem-label">
            Describe your problem:
          </label>
          <textarea
            id="problem"
            name="problem"
            onChange={postUserData}
            value={problem}
            placeholder="State your problem here..."
            className="problem-textarea"
            required
          />
        </div>

        {/* File Upload */}
        <input
          className="file-upload"
          id="fileUpload"
          type="file"
          multiple
          accept="application/pdf, image/png"
          onChange={handleUploadFiles}
        />

        <label htmlFor="fileUpload">
          <a className="btn btn-primary upload-button">Upload Files</a>
        </label>

        <div className="uploaded-files-list">
          {uploadedFiles.map((file, index) => (
            <div key={index}>{file.name}</div>
          ))}
        </div>

        {/* Dropdown */}
        <div className="dropdown-container drpdwn-container">
          <label htmlFor="dropdown" className="dropdown-label drpdwn-label">
            To Which Specialist:
          </label>
          <select
            id="dropdown"
            name="doctor"
            className="dropdown drpdwn"
            onChange={postUserData}
            value={doctor}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Doctor 1</option>
            <option value="option2">Doctor 2</option>
            <option value="option3">Doctor 3</option>
          </select>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default PatientDashboard;
