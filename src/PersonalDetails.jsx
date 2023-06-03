import React, { useState } from 'react';
import './PersonalDetails.css'

const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [address, setAddress] = useState('');
  const [dependencies, setDependencies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      name,
      email,
      contactNumber,
      nationality,
      gender,
      maritalStatus,
      address,
      dependencies,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setName('');
    setEmail('');
    setContactNumber('');
    setNationality('');
    setGender('');
    setMaritalStatus('');
    setAddress('');
    setDependencies('');
  };

  return (
    <div className="container">
          <h1>Enter Personal details</h1>
        
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contact Number:</label>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label>Nationality:</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Marital Status:</label>
        <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Dependencies:</label>
        <textarea
          value={dependencies}
          onChange={(e) => setDependencies(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
