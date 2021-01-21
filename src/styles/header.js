import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { shade } from 'polished';



const Menubar = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;

    
  a, .navbar-nav, .navdropdown {
      font-family: 'Roboto Slab', serif;
      font-size: 16px; 
      color: #000;
      
      

    &:hover { 
        color: ${shade(0.2, '#fff')} }
        
  }
`;

const Header = () => {

    const [auth, setAuth] = useState();

    useEffect(() => {
        setAuth(JSON.parse(sessionStorage.getItem('user')));
    
    }, []);


    const isAuth = () => {
        if (!auth) {
            return <Link to='/login'>Login</Link>
        } else {
            return <Link to='/logout'>{auth.name}(Logout)</Link>
        }
    }


    return <Menubar>
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse >
                    <Nav className="ml-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/menu'>Menu</Link></Nav.Link>
                        <Nav.Link><Link to='/booking'>Book a Table</Link></Nav.Link>
                        <NavDropdown title="Order Online">
                            <NavDropdown.Item><Link to='/takeout'>Takeout</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/delivery'>Delivery</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>{isAuth()}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Menubar>      
}

export default Header;

