import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'; // Import BrowserRouter
import Login from './Login';
import Home from './home';
import AboutUs from './AboutUs';
import Navigationbar from './Navbar';
import FinishSignUp from './FinishSignUp';
import DriverSignup from './DriverSignup';
import ContactUs from './ContactUs';
import Driver from './Driver';
import OrderHandler from './OrderHandler';
import Manager from './Manager';

import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

const [data,setData]=useState("");


const getData =async()=>{
  const response = await axios.get("http://localhost:3000/pubudini");
  setData(response.data);
  console.log(data);
}

useEffect(()=>{
getData();
});

  return (
    <div>
      <BrowserRouter> {/* Use BrowserRouter instead of BrowserRoute */}
        <Navigationbar/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/FinishSignUp" element={<FinishSignUp />} />
          <Route path="/DriverSignup" element={<DriverSignup />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Driver" element={<Driver />} />
          <Route path="/OrderHandler" element={<OrderHandler />} />
          <Route path="/Manager" element={<Manager />} />

         </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
