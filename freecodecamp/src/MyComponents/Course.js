import React from 'react';
import { useNavigate } from 'react-router-dom';
import react from '../images/react.png';
import webpage from '../images/webpage.png';
import javascript from '../images/javascript.jpeg';
import backend from '../images/backend.png';
import dataVisualization from '../images/dataVisualization.png';
import quality from '../images/quality.png';
import Button from 'react-bootstrap/Button';

const Course = () => {

    const history = useNavigate();

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

  return (
    <>
        <div className='container mt-3 row'>
        
            <div className='col'>
                <div style={{ marginLeft:"1150px" }} >
                    <Button style={{borderColor:'black'}} onClick={userlogout}>Logout</Button>
                </div>
            </div>
            <div className=' justify-content-center row'>
                <div className='courseList mt-6 ' style={{ marginLeft:"200px"}} >
                    <div className='mt-6 text-center' style={{ marginTop:"10px"}}>
                        <h4>Welcome to freeCodeCamp.org</h4>
                        <h6 className='mt-4'>'I have not failed. I have just found 10000 ways that wont work.' </h6>
                        <h6 className='mb-3'>-Thomas A Edison</h6>
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={webpage} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        (New) Responsive Web Design Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={webpage} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        Legacy Responsive Web Design Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={javascript} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        Javascript Algorithms and Data Structures Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={react} style={{maxWidth:40, height:30,marginRight:'10px'}} alt="This is website image" />
                        Front End Development Libraries Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={dataVisualization} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        Data Visualization Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img className='' src={backend} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        Back End Development and APIs Certification (300 hours)
                    </div>
                    <div className='rectangle rounded border border-dark h-5 p-2 mt-2' style={{backgroundColor:'grey'}}>
                        <img src={quality} style={{maxWidth:40, height:30, marginRight:'10px'}} alt="This is website image" />
                        Quality Assurance Certification (300 hours)
                    </div>
                    
                </div>

            </div>
        </div>
        
    </>
  )
}

export default Course
