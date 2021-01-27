import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { shade } from 'polished';
import Basket from '../pages/menu/basket';



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


const Button = styled.div` 
    margin-right: 20px;

    button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px; 
        color: #000;
        margin-right: 20px;
        background: #f6f6f6;
        height: 25px;
        border-radius: 10px;
        border: 0;
        padding: 0 2px;
        width: 100%;
        
        &:hover, &:active {
            background: ${shade(0.2, '#f6f6f6')}
        }


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
                        <Button> <Basket /> </Button>
                        {isAuth()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Menubar>)
}

export default Header;

