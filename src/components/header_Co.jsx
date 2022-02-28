import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Motivation from "./motivation_co";

export default class navbar extends Component {
  handleReloadOfPage() {
    window.location.reload();
  }
  handleMotivationalSpeech() {
    return <Motivation />;
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand onClick={this.handleReloadOfPage} href="#storyofmylife">
          Motivation for InteraktionDesign
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            onClick={this.handleMotivationalSpeech}
            id="ta"
            href="#action1"
          >
            Motivation speech
          </Nav.Link>
          <Nav.Link id="ta" href="#action2">
            Earlier Projects
          </Nav.Link>
        </Nav>
        <Navbar.Collapse
          className="justify-content-end flex-grow-2"
          id="Navbar"
        >
          <NavDropdown title="About me" id="e">
            <NavDropdown.Item href="#action3">
              Detailed Information
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">Contact me</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              <NavDropdown.Divider></NavDropdown.Divider>
              Never gonna let you down
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
