import React from 'react'
import logo from '../logo.svg'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <br /><br /><br />
      <header className="App-header">
        <h1>Tax DApp for Solana</h1>
        <p>A decentralized and secure way to calculate and pay taxes</p>
        <a href="#calculator" className="btn-primary">Get Started</a>
      </header>
      <section className="Features">
        <div className="Feature">
          <img src={logo} alt="Security" />
          <h2>Security</h2>
          <p>Transactions are recorded on a decentralized and tamper-proof blockchain, ensuring maximum security and privacy.</p>
        </div>
        <div className="Feature">
          <img src={logo} alt="Efficiency" />
          <h2>Efficiency</h2>
          <p>Smart contracts automate the tax calculation and payment process, reducing the cost and complexity of tax compliance.</p>
        </div>
        <div className="Feature">
          <img src={logo} alt="Transparency" />
          <h2>Transparency</h2>
          <p>The blockchain provides a transparent and auditable ledger of all tax transactions, enhancing trust and confidence in the tax system.</p>
        </div>
      </section>
      <section className="Calculator" id="calculator">
        <h2>Calculate Your Tax Liability</h2>
        <form>
          <label htmlFor="income">Income:</label>
          <input type="number" name="income" id="income" required />
          <label htmlFor="deductions">Deductions:</label>
          <input type="number" name="deductions" id="deductions" required />
          <label htmlFor="credits">Credits:</label>
          <input type="number" name="credits" id="credits" required />
          <button type="submit" className="btn-primary">Calculate</button>
        </form>
        <button onClick={()=>{navigate("/calculate")}}>Calculate tax</button>
      </section>
      <footer>
        <p>&copy; 2023 Tax DApp for Polkadot</p>
      </footer>
    </div>
  );
}

export default Dashboard