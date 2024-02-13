import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fccLogo from '../images/fccLogo.png';
import signUp from '../images/signUp.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email:"",
    password:""
  })

  const [data,setData] = useState([]);

  console.log(inpval);

  const getdata = (e) => {
    //console.log(e.target.value);

    const {value,name} = e.target;
    //console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]:value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userDetails");
    console.log(getuserArr);

    const {email,password} = inpval;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if(email === ""){
      emailError.innerHTML = "Email ID field is required";
        return;
    }else if(!email.includes("@")){
      emailError.innerHTML = "Enter a valid Email ID";
        return;
    }else if(password === "" || password.length < 8 || password.length > 20){
      passwordError.innerHTML = "Password should be between 8-20 characters";
        return;
    }else {

      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
            return el.email === email && el.password === password
        });

        if (userlogin.length === 0) {
            alert("invalid details")
        } else {
            console.log("user login successfully");

            localStorage.setItem("user_login", JSON.stringify(userlogin))

            history("/course")
        }
    }
    }

  }

  return (
    <>
    <div className='container mt-3'>
          <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{width:'100%', marginLeft:"200px"}}>
            <h3 className='text-center col-lg-6'>Sign In</h3>
            <Form className='signIn'>
              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Your email ID" />
                <span id="emailError" className="error"></span>
                
              </Form.Group>
              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Your Password" />
                <span id="passwordError" className="error"></span>
                
              </Form.Group>
    
              <Button variant="primary" className='col-lg-8' onClick={addData} style={{backgroundColor:'orange'}} type="submit">
                Submit
              </Button>
    
            </Form>
            <p className='mt-3'>New User? <span><NavLink to="/signup">Sign Up</NavLink></span></p>
          </div>
    
          <div className='right-data row' style={{width:'100%', marginTop:"35px"}}>
            <div className="fccLogoImg mb-8"><img src={fccLogo} alt="This is freeCodeCamp logo" height="20px" /></div>
            <div className="signInImg mb-8"><img src={signUp} style={{maxWidth:480, height:300}} alt="This is signUp image" /></div>
          </div>
          </section>
          
        </div>
        </>
  )
}

export default Login
