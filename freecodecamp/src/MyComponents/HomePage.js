import React from 'react';
import apple from '../images/apple.png'
import amazon from '../images/amazon.png';
import google from '../images/google.jpeg';
import microsoft from '../images/microsoft.png';
import spotify from '../images/spotify.png';
import '../App.css';

export default function HomePage() {
  return (
    <div>

  <div className=" text-center pt-3">
    <div className=" pt-5 text-lg-left font-weight-bold text-capitalize">
      <div className=" card " id="mainText">
        <ul className=" list-group list-group-flush">
          <li className="main list-group-item ">Learn to code - for free.</li>
          <li className="main list-group-item">Build Projects. </li>
          <li className="main list-group-item">Earn Certificates. </li>
        </ul>
      <div> 
      <p className="main" id="content">Since 2014, MoreThan 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
    </div>
    <div className="imgContainer" >
      <div className="image"><img src={apple} alt="This is Apple logo" height="20px" /></div>
      <div className="image"><img src={amazon} alt="This is Amazon logo" height="20px" /></div>
      <div className="image"><img src={google} alt="This is Google logo" height="20px" /></div>
      <div className="image"><img src={microsoft} alt="This is Microsoft logo" height="20px" /></div>
      <div className="image"><img src={spotify} alt="This is Spotify logo" height="20px" /></div>
    </div>

    <div className="d-grid pt-4" >
      <button className="btn-outline-light text-dark btn-warning btn-lg submitbtn " style={{marginBottom:"200px"}} type="submit">Get Started its Free</button>
    </div>
  
  </div>
      
    </div>
  </div>
    </div>
  )
}
