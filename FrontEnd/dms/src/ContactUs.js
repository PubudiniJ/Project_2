import React from 'react';
import img4 from './images/trico-kurunegala.jpg';
import img3 from './images/back.jpg';
import { Container } from 'react-bootstrap';


function ContactUs() {
  return (
    
    <div className='AboutUs' style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
       
        <Container className="d-flex justify-content-center align-items-center">
        <div >
        <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">Contact Us  </h1>
        </div>    
        </Container>
        <section className="vh-100">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 mb-3" >
              <img src={img4} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-4 offset-xl-1">
              <form>

                <div className="form-outline mb-4">
                    <h2 style={{textAlign:'center', fontSize:'25px', marginBottom:'50px'}}> Trico Maritime Warehouse Kurunegala </h2>
                    <p style={{textAlign:'center',fontSize:'20px'}}>Hambara Road, <br/>
                                                    Sandagala, <br/>
                                                    Uhumeeya, <br/>
                                                    Sri Lanka <br/> <br/>
                                                    Tel: +94 37 223 8924-5 <br/>
                                                    Mobile: +94 77 302 8348 (Wasantha) <br/><br/>
                                                    Open Mon - Fri 8:00AM to 3:00PM (GMT +5.30) </p>
                </div>

                

              </form>
            </div>
          </div>
        </div>
      </section>






       
    </div>
  



  )
}

export default ContactUs