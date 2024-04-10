import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img2 from './images/trico.png';


function Navigationbar() {
  return (
    <div>
    <Navbar expand="lg" bg='dark' variant='dark' sticky='top'>
      <Container>
      <Navbar.Brand> <img alt="" src={img2} width="60" height="75" className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Brand href="#home" style={{fontSize:'25px'}}>Trico-Maritime (Pvt) Ltd.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link style={{fontSize:'18px', marginLeft:'20px'}} href="/">Home</Nav.Link>
            <Nav.Link style={{fontSize:'18px', marginLeft:'20px'}} href="/AboutUs">About Us</Nav.Link>
            <Nav.Link style={{fontSize:'18px', marginLeft:'20px'}} href="/ContactUs">Contact Us</Nav.Link>
            
            <NavDropdown style={{fontSize:'18px', marginLeft:'20px'}} title="User Accounts" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Login">Driver</NavDropdown.Item>
              <NavDropdown.Item href="/Login"> Transport Manager </NavDropdown.Item>
              <NavDropdown.Item href="/Login">Order Handler</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">  Separated link  </NavDropdown.Item>
           </NavDropdown>
           <Nav.Link style={{fontSize:'18px', marginLeft:'20px'}} href="/Login">Login</Nav.Link>
           </Nav>
           <div className="ml-auto">
              <Button variant="danger" className="btn btn-primary btn-lg" href="/DriverSignup">Register</Button>
          </div>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </div>
  )
}

export default Navigationbar