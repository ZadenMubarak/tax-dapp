import React from "react";
import { Route, BrowserRouter, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaxCalculator from "./components/TaxCalculator";
import PaymentPage from "./components/PaymentPage";

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/calculate" element={<TaxCalculator/>} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>

    </BrowserRouter>
  )
  
}

export default App;
