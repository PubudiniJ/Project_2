import React from 'react';
import img2 from './images/trico.png';
import img3 from './images/back.jpg';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';



function Login() {
  const [Username,setUsername] = useState('')
  const [password,setpassword] = useState('')

  function handleForm(event){

    event.preventDefault()
    let userData ={
      Username:Username,
      password:password
    }
    fetch("http://localhost:3000/login",{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userData)
    }).then(response=> response.json()).then(data=>{
    alert(JSON.stringify(data.message));

    if(data.message==="valid user"){
      window.location.href="/Driver";
    }

    })
    console.log("Clicked")
  }
  return (
    
    <div className='Login' style={{ backgroundImage:`url(${img3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
       
        <Container className="d-flex justify-content-center align-items-center">
        <div >
        <h1 style={{ fontWeight: 'bold',fontSize:'2.8rem' }} className="mt-3">Login  </h1>
        </div>    
        </Container>
        <section className="vh-90">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-4 mb-3" >
              <img src={img2} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleForm}>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13" style={{ fontWeight: 'bold'}}>Username</label>
                  <input type="username" id="form1Example13" className="form-control form-control-lg" onChange={e=>setUsername(e.target.value)} placeholder='Enter your Username' required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23" style={{ fontWeight: 'bold'}}>Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-lg" onChange={e=>setpassword(e.target.value)} placeholder='Enter your Password'required/>
               </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label className="form-check-label" htmlFor="form1Example3" style={{ fontWeight: 'bold'}}> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <Container className="d-flex justify-content-center align-items-center mt-4 mb-3">
                <div>
                <Button type="submit" className="btn btn-primary btn-lg btn-block">Log in</Button>
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