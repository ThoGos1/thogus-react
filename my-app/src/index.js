import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div style={{marginBottom: '50px'}}></div>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="*" element={ <main style={{ padding: "1rem", fontSize: '42.94px' }}> <p> 404 There's nothing here! <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p> </main> }/>
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
