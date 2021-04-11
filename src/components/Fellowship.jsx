import React from 'react';
import "./fellowship.css"
import Dropdown from 'react-bootstrap/Dropdown'
import "./styles.css"

function Fellowship() {
  return (
    <div className="container">
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
        </form>
    </div>
  )
};

export default Fellowship;