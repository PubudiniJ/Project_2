import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import img3 from './images/back.jpg';

export default function DriverSignup() {
  return (
    <div style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

      <Container className="d-flex justify-content-center align-items-center">
           <div >
          <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">Register  </h1>
          </div>    
        </Container>
        <Container fluid className="h-90 h-custom gradient-custom-2">
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        <Card className="card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                            <Card.Body className="p-0">
                                <Row>
                                    <Col lg={6}>
                                        <div className="p-4">
                                            <h3 className="fw-normal mb-4" style={{ color: '#4835d4', fontWeight:'bold'}}>Driver Information</h3>
                                            
                                            
                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2" style={{ fontWeight: 'bold'}}>First name</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" />
                        
                      </div>
                    </div>
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline">
                        <label class="form-label" for="form3Examplev3" style={{ fontWeight: 'bold'}}>Last name</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="d-md-flex justify-content-start align-items-center mb-3 py-2">

                        <h6 className="mb-0 me-4" style={{ fontWeight: 'bold'}}>Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label className="form-check-label" htmlFor="femaleGender" style={{ fontWeight: 'bold'}}>Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" htmlFor="maleGender" style={{ fontWeight: 'bold'}}>Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" htmlFor="otherGender" style={{ fontWeight: 'bold'}}>Other</label>
                        </div>

                      </div>


                  <div class="mb-3 pb-2">
                    <div class="form-outline">
                    <label class="form-label" for="form3Examplev4" style={{ fontWeight: 'bold'}}>Address</label>
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" />
                    </div>
                  </div>

                  <div class="mb-3 pb-2">
                    <div class="form-outline">
                    <label class="form-label" for="form3Examplev4" style={{ fontWeight: 'bold'}}>NIC</label>
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" /> 
                    </div>
                  </div>

                  <div class="mb-3 pb-2">
                    <div class="form-outline">
                    <label class="form-label" for="form3Examplev4" style={{ fontWeight: 'bold'}}>Telephone</label>
                    <input type="text" id="form3Examplev4" class="form-control form-control-lg" />  
                    </div>
                  </div>

                  <div class="mb-3 pb-2">
                    <div class="form-outline">
                    <label class="form-label" for="form3Examplev4" style={{ fontWeight: 'bold'}}>Driving Lisence No</label>
                    <input type="text" id="form3Examplev4" class="form-control form-control-lg" />
                   </div>
                  </div>

                  
                </div>   
              </Col>


     {/* Second column for contact details */}

     <Col lg={6}>
      <div className="p-4">
      <h3 className="fw-normal mb-4" style={{ color: '#4835d4',fontWeight: 'bold' }}>Vehicle Information</h3>

                <Form.Group className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                <Form.Label>Vehicle No</Form.Label>
                    <Form.Control type="text" id="form3Examplea2" className="form-control-lg" />
                 </Form.Group>

                <Form.Select className="mb-4 pb-2" style={{ fontWeight: 'bold'}}>
                  <option value="1">Vehicle Type</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </Form.Select>

                <Form.Select className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                  <option value="1">Fuel Type</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </Form.Select>

                <Form.Group className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                  <Form.Label>Length</Form.Label>
                  <Form.Control type="text" id="form3Examplea3" className="form-control-lg" />
                </Form.Group>

                <Form.Group className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                    <Form.Label>Width</Form.Label>
                    <Form.Control type="text" id="form3Examplea4" className="form-control-lg" />
                </Form.Group>

                <Form.Group className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="text" id="form3Examplea5" className="form-control-lg" />
                </Form.Group>

                <Form.Group className="mb-3 pb-2" style={{ fontWeight: 'bold'}}>
                    <Form.Label>Maximum Weight</Form.Label>
                    <Form.Control type="text" id="form3Examplea6" className="form-control-lg" />
                </Form.Group>

                <Button variant="primary" size="lg" style={{ fontWeight: 'bold'}} href="/FinishSignUp">Next</Button>
            </div>
        </Col>
            

         </Row>
          </Card.Body>
          </Card>
          </Col>
        </Row>

                
      </Container>
        </Container>
    </div>
);
}

