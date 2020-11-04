import React from 'react';
import {Navbar, Nav , NavDropdown ,} from 'react-bootstrap'

function Ribbon(){
    return(
        <div>
            <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="All Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.8">Separated link</NavDropdown.Item>
      </NavDropdown>  
      <Nav.Link href="#link">Mobile Phones</Nav.Link>
      <Nav.Link href="#link">Cars</Nav.Link>
      <Nav.Link href="#link">Motorcycles</Nav.Link>
      <Nav.Link href="#link">Houses</Nav.Link>
      <Nav.Link href="#link">TV-Videos-Audio</Nav.Link>
      <Nav.Link href="#link">Tablets</Nav.Link>
      <Nav.Link href="#link">Land and Plots</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default Ribbon;