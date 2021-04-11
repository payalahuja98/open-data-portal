import React from 'react';
import './styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './recruitment.css';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import RequestData from './RequestData.jsx'
import Logo from "./uiuc_logo.png";

function NavBar() {
  return (
    <div>
    <div class="navbar">
      <Navbar collapseOnSelect expand="lg">
      <Image id='logo'
        src={Logo}
        alt="University Logo"
        fluid 
    />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="About">
              <NavDropdown.Item href="https://www.stanforddaily.com/category/@94305/" target="_blank">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="https://pitlab.stanford.edu/" target="_blank">Ethical Standards</NavDropdown.Item>
              <NavDropdown.Item href="https://opendatacampus.com/" target="_blank">Data Governance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/datasets">Datasets</Nav.Link>
            <Button href="#/fellowship" id="req-button">Request Data</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default NavBar;
