import React, { useState } from 'react';

const Adress = () => {

  const [currentAddress, setCurrentAddress] = useState('');

  const [permanentAddress, setPermanentAddress] = useState('');

  const [documentType, setDocumentType] = useState('');

  const [documentNumber, setDocumentNumber] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    // Perform submit action

    const formData = {

      currentAddress,

      permanentAddress,

      documentType,

      documentNumber,

    };

    console.log('Form Data:', formData);

    // Reset form fields

    setCurrentAddress('');

    setPermanentAddress('');

    setDocumentType('');

    setDocumentNumber('');

  };

  return (

    <div className="container">

      <h1>Enter Adress Details</h1>

      <form onSubmit={handleSubmit}>

        <label>Current Address:</label>

        <textarea

          value={currentAddress}

          onChange={(e) => setCurrentAddress(e.target.value)}

          required

        />

        <label>Permanent Address:</label>

        <textarea

          value={permanentAddress}

          onChange={(e) => setPermanentAddress(e.target.value)}

          required

        />

        <label>Document Type:</label>

        <select

          value={documentType}

          onChange={(e) => setDocumentType(e.target.value)}

          required

        >

          <option value="">Select document type</option>

          <option value="passport">Passport</option>

          <option value="driverLicense">Driver's License</option>

          <option value="idCard">ID Card</option>

          <option value="other">Other</option>

        </select>

        <label>Document Number:</label>

        <input

          type="text"

          value={documentNumber}

          onChange={(e) => setDocumentNumber(e.target.value)}

          required

        />

        <button type="submit">Submit</button>

      </form>

    </div>

  );

};

export default Adress;