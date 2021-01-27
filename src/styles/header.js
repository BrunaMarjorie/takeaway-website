import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { shade } from 'polished';


const Menubar = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: absolute;

    
  a, .navbar-nav, .navdropdown, :link {
      font-family: 'Roboto Slab', serif;
      font-size: 16px; 
      color: #000;
      margin-right: 20px;
      
      

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

    return (
        <Menubar>
            <Navbar bg="light" expand="lg">
                <Navbar.Collapse >
                    <Nav className="ml-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/menu'>Menu</Link>
                        <Link to='/booking'>Book a Table</Link>
                        <Link to='/menu'>Order Online</Link>
                        {isAuth()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Menubar>)
}

export default Header;

