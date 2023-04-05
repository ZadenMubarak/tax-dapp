import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [notes, setNotes] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  }

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would add the code to submit the payment to the blockchain
    console.log('Payment submitted!');
  }

  return (
    <div className="PaymentPage">
        <br/><br/><br/>
      <h2>Make a Payment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount-input">Amount:</label>
        <input id="amount-input" type="number" min="0" step="0.01" value={amount} onChange={handleAmountChange} required />
        <label htmlFor="recipient-input">Recipient:</label>
        <input id="recipient-input" type="text" value={recipient} onChange={handleRecipientChange} required />
        <label htmlFor="notes-input">Notes:</label>
        <textarea id="notes-input" value={notes} onChange={handleNotesChange}></textarea>
        <button type="submit">Send Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
