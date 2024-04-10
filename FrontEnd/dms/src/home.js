import React from 'react';
import { Button } from 'react-bootstrap';
import img1 from './images/d1.jpg';

function Home() {
  return (
    <div>
       {/*
        <Button variant="light" href="#register">Register</Button>
   */}
      <div className="header" style={{ height: '95vh', backgroundColor: '#080008', position: 'relative' }}>
        <div className="banner" style={{ width: '100%', height: '85vh', position: 'relative', overflow: 'hidden', marginTop: '15px' }}>
          <div className="slider" style={{ width: '100%', height: '75vh', position: 'absolute', marginTop: '10px' }}>
            <img src= {img1}id="slideimg" alt="slide1" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="overlay" style={{ width: '100%', marginTop: '10px', height: '100vh', position: 'absolute', top: '0', background: 'linear-gradient(rgba(4,9,30,0.6),rgba(4,9,30,0.6))' }}>
           <div className="navbar" style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '25px auto' }}> 
             
            </div>
            <div className="content" style={{ width: '100%', margin: '10px auto 0', textAlign: 'center', color: '#fff' }}>
              <h1>Welcome To The Driver Management System  <br />Of<br /> Trico Maritime (Pvt) Ltd.</h1>
              <p>Choose your user account to Log in.</p>
              <div>
                <Button variant="primary" className="btn btn-primary btn-lg btn-block"  style = {{marginBottom:'15px'}} href="/Login"><strong>Driver</strong></Button> <br />
                <Button variant="primary" className="btn btn-primary btn-lg btn-block"  style = {{marginBottom:'15px'}} href="/Login"><strong>Transport Manager</strong></Button> <br />
                <Button variant="primary" className="btn btn-primary btn-lg btn-block"  style = {{marginBottom:'15px'}} href="/Login"><strong>Order Handler</strong></Button>
              </div>

              <div className="content" style={{ width: '100%', margin: '20px auto 0', textAlign: 'center', color: '#fff' }}>
              <p>Don't have an account?</p>
              <Button variant="warning" className="btn btn-primary btn-lg btn-block"  style = {{marginBottom:'15px'}} href="/DriverSignup"><strong>Register</strong></Button>
              </div>
            
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
