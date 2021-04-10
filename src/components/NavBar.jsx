import React from 'react';
import './styles.css';
import logoImage from './static/Main Logo@2x.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './recruitment.css';
import Button from 'react-bootstrap/Button'

function NavBar() {
  return (
    <div id="nav">
      <Navbar bg="light" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logoImage}
            style={{verticalAlign: 'middle', height:'5em', paddingTop: '.5em'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="About">
              <NavDropdown.Item href="https://www.stanforddaily.com/category/@94305/" target="_blank">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="https://pitlab.stanford.edu/" target="_blank">Ethical Standards</NavDropdown.Item>
              <NavDropdown.Item href="https://opendatacampus.com/" target="_blank">Data Governance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/datasets">Datasets</Nav.Link>
            <Nav.Link href="#/fellowship">Contribute</Nav.Link>
            <Button>Request Data</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
