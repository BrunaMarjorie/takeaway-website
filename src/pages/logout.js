import React, { useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";

const Logout = () => {

    sessionStorage.clear();
    localStorage.removeItem('menuList');
    localStorage.removeItem('orders');

    const history = useHistory();

    useEffect(() => {
        history.go(0);
    }, [])
      

    return <Redirect to='/' />
}

export default Logout;

