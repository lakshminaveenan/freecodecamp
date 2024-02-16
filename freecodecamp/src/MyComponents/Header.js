import React from 'react'
import '../App.css';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg nav bg-dark">
    <div className="container">
      
      <form className="collapse navbar-collapse mb-6" id="navbarSupportedContent">

        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light text-info" type="submit">Search</button>
      </form>

      <p className="h4 mb-6 text-info"> freeCodeCamp (<svg xmlns="http://www.w3.org/2000/svg" width="16" 
        height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/></svg>)
      </p>
      
        <div className="d-flex" role="search">
        <ul className="navbar-nav me-auto mb-lg-0">
          
          <li className=" collapse navbar-collapse nav-item dropdown">
            <button className="nav-link dropdown-toggle text-info btn btn-outline-light" type="submit" 
            role="button" data-bs-toggle="dropdown" 
            aria-expanded="false">
              Menu
            </button>
            <ul className="dropdown-menu bg-dark text-info">
              <li><a className="dropdown-item text-info" href="#">About Me</a></li>
              <li><hr className="dropdown-divider text-info"/></li>
              <li><a className="dropdown-item text-info" href="#">Free Code</a></li>
              <li><hr className="dropdown-divider text-info"/></li>
              <li><a className="dropdown-item text-info" href="#">Code Developer</a></li>
            </ul>
          </li>

          <button className="navbar-brand text-info btn btn-outline-light" ><span><NavLink style={{textDecoration:'none'}} to="/login">SignIn</NavLink></span></button>

        </ul>
      </div>
    </div>
  </nav>
      
    </div>
  )
}

export default Header
