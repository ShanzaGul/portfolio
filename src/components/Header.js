import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Spring,config} from 'react-spring/renderprops'
import logo from '../images/SG.png'
export default function Header() {
    return (
       
<div className="header pt-3 pb-3 border-bottom shadow-sm"> 
 <Spring config={config.slow}
  from={{ opacity: 0 , marginTop :"-500px"}}
  to={{ opacity: 1 ,  marginTop :"0px" }}
   >
  {props => <div style={props}>
           <Navbar collapseOnSelect expand="lg">
           <Navbar.Brand href="/">
      <img
        src={logo}
        width="auto"
        height="100"
        className="d-inline-block align-top"
        alt="Home logo"
      />
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    
                    <LinkContainer to="/"> 
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/work"> 
                    <Nav.Link>Work</Nav.Link>
                    </LinkContainer>


                    <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                    </LinkContainer>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
  </div>}
</Spring>
            
        </div>
      )
}
