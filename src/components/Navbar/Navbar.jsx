import React from 'react'
import styles from "./Navbar.module.css";
import logo from "../../assets/logos.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
    <div className="container-fluid">
       
      <img className="navbar-brand" src={logo}/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
 
      <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Attorneys</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Practice area</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">About Us</a>
          </li>
        </ul>
      </div>
      <div>
      <button type="button" class="btn btn-dark border border-white text-white bg-dark">Contact Now</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar