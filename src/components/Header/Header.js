import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Spring, config } from "react-spring/renderprops";
import logo from "../../images/SG.png";
import "./Header.css";
export default function Header() {
  return (
    <div
      className="header border-bottom shadow-sm"
      style={{ backgroundColor: "#0E185F" }}
    >
      <Spring
        config={config.slow}
        from={{ opacity: 0, marginTop: "-500px" }}
        to={{ opacity: 1, marginTop: "0px" }}
      >
        {(props) => (
          <div style={props}>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="/">
                {/* <img
                  src={logo}
                  width="auto"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Home logo"
                /> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <LinkContainer to="/">
                    <Nav.Link className="link-text">Home</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/work">
                    <Nav.Link className="link-text">Work</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/about">
                    <Nav.Link className="link-text">About</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}
      </Spring>
    </div>
  );
}
