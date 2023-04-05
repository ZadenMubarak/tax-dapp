import React, { useState } from 'react';
import './TaxCalculator.css';

function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [taxAmount, setTaxAmount] = useState('');

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  }

  const handleTaxRateChange = (event) => {
    setTaxRate(event.target.value);
  }

  const calculateTax = () => {
    const tax = (income * (taxRate / 100)).toFixed(2);
    setTaxAmount(tax);
  }

  return (
    <div className="TaxCalculator">
      <h2>Tax Calculator</h2>
      <label htmlFor="income-input">Enter your income:</label>
      <input id="income-input" type="number" value={income} onChange={handleIncomeChange} />
      <label htmlFor="tax-rate-input">Enter your tax rate:</label>
      <input id="tax-rate-input" type="number" value={taxRate} onChange={handleTaxRateChange} />
      <button onClick={calculateTax}>Calculate Tax</button>
      {taxAmount !== '' &&
        <p>Your tax amount is: {taxAmount}</p>
      }
    </div>
  );
}

export default TaxCalculator;
