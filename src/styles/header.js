import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { shade } from 'polished';


import Menu from '../pages/menu/menu';
import Homepage from '../pages/homepage/homepage';
import SignIn from '../pages/signIn/signIn';
import SignUp from '../pages/signUp/signUp';
import ForgotPassword from '../pages/forgotPassword/forgot';
import Logout from '../pages/logout';
import Takeaway from '../pages/takeaway/takeaway';
import Booking from '../pages/booking/booking';



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

    const [auth, SetAuth] = useState();

    useEffect(() => {
        SetAuth(JSON.parse(sessionStorage.getItem('user')));
    
    }, [auth]);


    const isAuth = () => {
        if (!auth) {
            return <Link to='/login'>Login</Link>
        } else {
            return <Link to='/logout'>{auth.name}(Logout)</Link>
        }
    }


    return <Router>
        <Menubar>
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
        <Switch>
            <Route path="/menu" exact component={Menu} />
            <Route path="/booking" exact component={Booking} />
            <Route path="/takeout" exact component={Takeaway} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/register" exact component={SignUp} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/" component={Homepage} />
        </Switch>
    </Router>
}

export default Header;

