import React from 'react';

/*react boostrap*/
import {Navbar, Nav} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

/*app navbar*/
export default function AppNavbar(){
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Zuitter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Courses</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}