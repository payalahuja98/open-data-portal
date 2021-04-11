import React from 'react';
import "./fellowship.css"
import Dropdown from 'react-bootstrap/Dropdown'
import "./styles.css"
import RequestImg from "./request-image.png"
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';

function Fellowship() {
  return (
    <div className="request-container">
    <div>
    <Image id='img'
        src={RequestImg}
        alt="University Logo"
        fluid 
    />
    </div>
    <div className="input-form">
      <form>
            <h5>Name</h5>
            <input />
            <h5>Illinois Email</h5>
            <input/>
            <h5>Category</h5>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-category">
                Administration and Finance
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Education</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Campus Life</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Environment</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Public Safety</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Health and Human Services</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h5>Time</h5>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-time">
                Most Recent
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1 Year</Dropdown.Item>
                <Dropdown.Item href="#/action-2">5 Years</Dropdown.Item>
                <Dropdown.Item href="#/action-3">10 Years</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Oldest Available</Dropdown.Item>
                <Dropdown.Item href="#/action-5">All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h5>Reason for requesting</h5>
            <textarea></textarea>
            <h5>Additional Notes</h5>
            <textarea></textarea>
            <Button id="submit">Submit</Button>
        </form>
    </div>
    </div>
  )
};

export default Fellowship;