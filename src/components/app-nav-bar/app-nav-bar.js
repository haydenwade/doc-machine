import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import AuthLoginProfile from '../auth/login-logout-profile';

const navBar = (props)=>{
    return (
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            <Link to='/'>WaWe</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            {/* <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text pullRight>Have a great day!</Navbar.Text> */}
            <Nav pullRight>
            <NavItem>
              <Link to='/builder'>Builder</Link>
            </NavItem>
                <NavItem >
                <AuthLoginProfile/>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}
  
export default withRouter(navBar);