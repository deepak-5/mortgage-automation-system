import React, { useState } from 'react';

const Income = () => {
  const [primaryIncome, setPrimaryIncome] = useState('');
  const [secondaryIncome, setSecondaryIncome] = useState('');
  const [itrDocument, setITRDocument] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submit action
    const formData = {
      primaryIncome,
      secondaryIncome,
      itrDocument,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    setPrimaryIncome('');
    setSecondaryIncome('');
    setITRDocument(null);
  };

  return (
    <div className="container">
      <h1>Enter Income Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Primary Income:</label>
        <input
          type="number"
          value={primaryIncome}
          onChange={(e) => setPrimaryIncome(e.target.value)}
          required
        />

        <label>Secondary Income:</label>
        <input
          type="number"
          value={secondaryIncome}
          onChange={(e) => setSecondaryIncome(e.target.value)}
          required
        />

        <label>ITR Document:</label>
        <input
          type="file"
          onChange={(e) => setITRDocument(e.target.files[0])}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Income
