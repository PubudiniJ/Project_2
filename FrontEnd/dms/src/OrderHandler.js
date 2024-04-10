import React from 'react';
import img5 from './images/d2.jpg';
import img3 from './images/back.jpg';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function OrderHandler() {
  return (
    
    <div className='Login' style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
       
        <Container className="d-flex justify-content-center align-items-center">
        <div >
        <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">Order Handler  </h1>
        </div>    
        </Container>
        <section className="vh-100">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-5 mb-4" >
              <img src={img5} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <Container className="d-flex justify-content-center align-items-center mt-2 mb-5">
                  <div>
                    <Button type="submit"  style = {{width:'300px', height:'90px',fontSize:'30px',fontWeight:'Bold'}} className="btn btn-primary btn-lg btn-block">My Profile</Button>
                  </div>
                </Container>

                <Container className="d-flex justify-content-center align-items-center mt-4 mb-5">
                  <div>
                    <Button type="submit" style = {{width:'300px', height:'90px',fontSize:'30px',fontWeight:'Bold'}} className="btn btn-primary btn-lg btn-block">Assigned Rides</Button>
                  </div>
                </Container>

                <Container className="d-flex justify-content-center align-items-center mt-4 mb-5">
                  <div>
                    <Button type="submit" style = {{width:'300px', height:'90px',fontSize:'30px',fontWeight:'Bold'}} className="btn btn-primary btn-lg btn-block">My Salary</Button>
                  </div>
                </Container>

              </form>
            </div>
          </div>
        </div>
      </section>






       
    </div>
  



  )
}

export default OrderHandler