import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage() {
  const [selectedCurrency, setSelectedCurrency] = useState('solana');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  }

  return (
    <div className="SettingsPage">
      <h2>Settings</h2>
      <form>
        <label htmlFor="currency-select">Default Currency:</label>
        <select id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="solana">Solana</option>
          <option value="polkadot">Polkadot</option>
          <option value="binance">Binance Smart Chain</option>
          <option value="ethereum">Ethereum</option>
          <option value="filecoin">filecoin</option>
        </select>
      </form>
    </div>
  );
}

export default SettingsPage;
