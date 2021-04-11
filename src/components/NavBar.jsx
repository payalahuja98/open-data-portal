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
import LandingPage from "./LandingPage";

function NavBar() {
  return (
    <div>
    <div class="navbar">
      <Navbar collapseOnSelect expand="lg">
      <Nav.Link href="#/">
      <Image id='logo'
        src={Logo}
        alt="University Logo"
        fluid 
      />
      </Nav.Link>
        <div id="heading">
        <h2>University of Illinois at Urbana-Champaign
        <h4>Open Data Portal</h4></h2>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="About">
              <NavDropdown.Item>Our Mission</NavDropdown.Item>
              <NavDropdown.Item>Ethical Standards</NavDropdown.Item>
              <NavDropdown.Item>Data Governance</NavDropdown.Item>
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
