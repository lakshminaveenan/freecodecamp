import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import fccLogo from '../images/fccLogo.png';
import signUp from '../images/signUp.png';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const history = useNavigate();

    const [inpval, setInpval] = useState({
        username:"",
        email:"",
        dob:"",
        address:"",
        password:"",
        confirmPassword:""
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
    
        const {username,email,dob,address,password,confirmPassword} = inpval;
    
        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var dobError = document.getElementById("dobError");
        var addressError = document.getElementById("addressError");
        var passwordError = document.getElementById("passwordError");
        var confirmPasswordError = document.getElementById("confirmPasswordError");
    
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        dobError.innerHTML = "";
        addressError.innerHTML = "";
        passwordError.innerHTML = "";
        confirmPasswordError.innerHTML = "";
    
        if(username === ""){
          nameError.innerHTML = "Username field is required";
            return;
        }else if(email === ""){
          emailError.innerHTML = "Email ID field is required";
            return;
        }else if(!email.includes("@")){
          emailError.innerHTML = "Enter a valid Email ID";
            return;
        }else if(dob === ""){
          dobError.innerHTML = "DOB field is required";
            return;
        }else if(address === ""){
          addressError.innerHTML = "Address field is required";
            return;
        }else if(password === "" || password.length < 8 || password.length > 20){
          passwordError.innerHTML = "Password should be between 8-20 characters";
            return;
        }else if(confirmPassword != password){
          confirmPasswordError.innerHTML = "Passwords don't match";
          return;
        }else {
          console.log("data added successfully");
          history("/login")
          localStorage.setItem("userDetails",JSON.stringify([...data,inpval])); 
        }
    
      }
    
      return (
        <>
        <div className='container mt-3'>
          <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{width:'100%', marginLeft:"200px"}}>
            <h3 className='text-center col-lg-6'>Sign Up</h3>
            <Form className='signUp'>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                
                <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Your Name" />
                <span id="nameError" className="error"></span>
                
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Your email ID" />
                <span id="emailError" className="error"></span>
                
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicDob">
                
                <Form.Control type="date" name='dob' onChange={getdata} placeholder="Enter Your DOB" />
                <span id="dobError" className="error"></span>
                
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicAddress">
                
                <Form.Control type="text" name='address' onChange={getdata} placeholder="Enter Your Address" />
                <span id="addressError" className="error"></span>
                
              </Form.Group>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Your Password" />
                <span id="passwordError" className="error"></span>
                
              </Form.Group>
    
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicConfirmPassword">
                
                <Form.Control type="password" name='confirmPassword' onChange={getdata} placeholder="Confirm Password" />
                <span id="confirmPasswordError" className="error"></span>
              </Form.Group>
    
              <Button variant="primary" className='col-lg-8' onClick={addData} style={{backgroundColor:'orange'}} type="submit">
                Submit
              </Button>
    
            </Form>
            <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
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

export default SignUp
