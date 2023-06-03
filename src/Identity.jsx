import React, { useState } from 'react';

const Identity = () => {
  const [identityType, setIdentityType] = useState('');
  const [identityName, setIdentityName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      identityType,
      identityName,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setIdentityType('');
    setIdentityName('');
  };

  return (
    <div className="container">
      <h1>Enter Identity Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Identity Type:</label>
        <select
          value={identityType}
          onChange={(e) => setIdentityType(e.target.value)}
          required
        >
          <option value="">Select identity type</option>
          <option value="PANCard">Pan number</option>
          <option value="driverLicense">Driver's License</option>
          <option value="AdharCard">Adhar Number</option>
         
        </select>

        <label>Identity Name:</label>
        <input
          type="text"
          value={identityName}
          onChange={(e) => setIdentityName(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Identity;