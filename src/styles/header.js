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
    margin-left: 15px;

    
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

    //collect user details
    useEffect(() => {
        setAuth(JSON.parse(sessionStorage.getItem('user')));

    }, []);

    //check if user is authenticated
    const isAuth = () => {
        if (!auth) {
            //return Login link if no user logged in
            return <Link to='/login'>Login</Link>
        } else {
            //return Logout link if user is logged in
            return <Link to='/logout'>{auth.name}(Logout)</Link>
        }
    }

    const isStaff = () => {
        if (auth) {
            //if user is logged in, collect their status
            const status = auth.status;
            if (status) {
                //if user is either a staff member or admnistrator,
                //return link to staff page
                if (status === 'staff' || status === 'admin') {
                    return <Link to='/staffpage'>Staff Page</Link>;
                } else {
                    return null;
                }
            }
        }
    }

    return (
        <Menubar>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="ml-auto">
                        <Link to='/'>Home</Link>
                        <Link to='/menu'>Menu</Link>
                        <Link to='/booking'>Book a Table</Link>
                        {isStaff()}
                        {isAuth()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Menubar>)
}

export default Header;

