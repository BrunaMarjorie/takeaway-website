import React from 'react';
import { Redirect } from "react-router-dom";


const Logout = () => {
    //clear session
    sessionStorage.clear();
    //clear menu list
    localStorage.clear();
    //return to homepage
    return <Redirect to='/' />
}

export default Logout;

