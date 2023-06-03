import React, { useState } from 'react';

const Assets = () => {
  const [assetValue, setAssetValue] = useState('');
  const [assetType, setAssetType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      assetValue,
      assetType,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setAssetValue('');
    setAssetType('');
  };

  return (
    <div className="container">
      <h1>Enter Assets Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Asset Value:</label>
        <input
          type="number"
          value={assetValue}
          onChange={(e) => setAssetValue(e.target.value)}
          required
        />

        <label>Asset Type:</label>
        <select
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
          required
        >
          <option value="">Select asset type</option>
          <option value="realEstate">Real Estate</option>
          <option value="vehicle">Vehicle</option>
          <option value="jewelry">Jewelry</option>
          <option value="investment">Investment</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Assets
