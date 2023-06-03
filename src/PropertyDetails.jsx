import React, { useState } from 'react';

const PropertyDetails = () => {
  const [assetValue, setAssetValue] = useState('');
  const [assetAddress, setAssetAddress] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [lawyerName, setLawyerName] = useState('');
  const [marketValue, setMarketValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      assetValue,
      assetAddress,
      propertyId,
      lawyerName,
      marketValue,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setAssetValue('');
    setAssetAddress('');
    setPropertyId('');
    setLawyerName('');
    setMarketValue('');
  };

  return (
    <div className="container">
      <h1>Enter Propery Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Asset Value:</label>
        <input
          type="number"
          value={assetValue}
          onChange={(e) => setAssetValue(e.target.value)}
          required
        />

        <label>Asset Address:</label>
        <textarea
          value={assetAddress}
          onChange={(e) => setAssetAddress(e.target.value)}
          required
        ></textarea>

        <label>Property ID:</label>
        <input
          type="text"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
          required
        />

        <label>Lawyer Name:</label>
        <input
          type="text"
          value={lawyerName}
          onChange={(e) => setLawyerName(e.target.value)}
          required
        />

        <label>Market Value:</label>
        <input
          type="number"
          value={marketValue}
          onChange={(e) => setMarketValue(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default PropertyDetails