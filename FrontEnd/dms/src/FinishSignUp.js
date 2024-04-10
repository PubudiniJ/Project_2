import React from 'react';
import img1 from './images/d1.jpg';
import img3 from './images/back.jpg';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Login() {
  return (
    
    <div className='FinishSignUp' style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
        
        <Container className="d-flex justify-content-center align-items-center">
        <div >
        <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">Register  </h1>
        </div>    
        </Container>
        <section className="vh-100">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-5 mb-3" >
              <img src={img1} className="img-fluid" alt="Phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13" style={{ fontWeight: 'bold'}}>Username</label>
                  <input type="username" id="form1Example13" className="form-control form-control-lg" placeholder='Enter your Username'required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23" style={{ fontWeight: 'bold'}}>Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='Enter your Password' required/>
               </div>

               <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23" style={{ fontWeight: 'bold'}}>Re-EnterPassword</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" placeholder='Re-Enter your Password' required/>
               </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" htmlFor="form1Example3" style={{ fontWeight: 'bold'}}> I agree all statements in terms of service. </label>
                  </div>
                  
                </div>

                <Container className="d-flex justify-content-center align-items-center mt-4 mb-3">
                <div>
                <Button type="submit" className="btn btn-primary btn-lg btn-block" href="/Login">Register</Button>
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

export default Login