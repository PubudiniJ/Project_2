import React from 'react';
import img2 from './images/trico.png';
import img3 from './images/back.jpg';
import { Container } from 'react-bootstrap';


function AboutUs() {
  return (
    
    <div className='AboutUs' style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
       
        <Container className="d-flex justify-content-center align-items-center">
        <div >
        <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">About Us  </h1>
        </div>    
        </Container>
        <section className="vh-90">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-4 mb-3" >
              <img src={img2} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div className="form-outline mb-4">
                    <p style={{textAlign:'center'}}> Trico Group started in the United Kingdom in 1978 as a partnership Business. It was involved in transporting Containers and heavy cargo within the UK. </p> <p style={{textAlign:'center'}}>The services were extended to Sri Lanka in 1978 and expanded its operations to the Gulf Region in 1983.

Today it has evolved as a worldwide operation having established branch offices in all the major cities of the world. </p> <p style={{textAlign:'center'}}>Trico is now a household name in Sri Lanka and has diversified its businesses into many other fields. Moving and caring of cargo is still our core business.

At Trico our business objective is to provide world class transportation services of all modes to our customers.</p><p> We also strive at the same time, providing a professional but friendly working environment and atmosphere for all our clients and employees.</p> <p style={{textAlign:'center'}}>

We take pride in the fact that Trico is competitive with the largest transportation providers while having a very close working bond with our clients.</p>
                 
                </div>

                

              </form>
            </div>
          </div>
        </div>
      </section>






       
    </div>
  



  )
}

export default AboutUs