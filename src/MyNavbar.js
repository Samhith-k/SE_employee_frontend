import React from "react"
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./images/logo.png"
const MyNavbar = () => {
    return(
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand><img src={Logo} alt="EMS"></img></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/" style={{color:'white'}}>Home</Link></Nav.Link>
          <Nav.Link><Link to="/Leave" style={{color:'white'}}>Leave</Link></Nav.Link>
          <Nav.Link><Link to="/Salary" style={{color:'white'}}>Salary</Link></Nav.Link>
          <Nav.Link><Link to="/Bill" style={{color:'white'}}>Bill-Rimburse</Link></Nav.Link>
          <Nav.Link><Link to="/Cab" style={{color:'white'}}>Book-Cab</Link></Nav.Link>
          <Nav.Link><Link to="/Approve" style={{color:'white'}}>Approvals</Link></Nav.Link>
          <Nav.Link><Link to="/Refer" style={{color:'white'}}>Referral</Link></Nav.Link>
          <Nav.Link><Link to="/Register" style={{color:'white'}}>Register</Link></Nav.Link>
          <Nav.Link><Link to="/approve_bill" style={{color:'white'}}>Approval-Bills</Link></Nav.Link>
        </Nav>
      </Navbar>
    );
}


export default MyNavbar