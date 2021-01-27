import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import api from './services/api';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Menu from '../src/pages/menu/menuList';
import Homepage from '../src/pages/homepage/homepage';
import SignIn from '../src/pages/signIn/signIn';
import SignUp from '../src/pages/signUp/signUp';
import ForgotPassword from '../src/pages/forgotPassword/forgot';
import Logout from '../src/pages/logout';
import Takeaway from '../src/pages/takeaway/takeaway';
import Delivery from '../src/pages/delivery/delivery';
import Booking from '../src/pages/booking/booking';
import StaffPage from '../src/pages/staff/staff';
import Invoice from '../src/services/printer/print';
import PrivateRoute from './routes/privateRoutes';


const App = () => {


  const getMenu = async () => {
    const res = await api.get('/menu');
    localStorage.setItem('menuList', JSON.stringify(res.data.Menu));
  }

  useEffect(() => {
    getMenu();
  }, []);


  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/menu" exact component={Menu} />
          <Route path="/staffpage" exact component={StaffPage} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/takeout" exact component={Takeaway} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/register" exact component={SignUp} />
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
