import React, { useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";

const Logout = () => {

    sessionStorage.clear();

    const history = useHistory();

    useEffect(() => {
        history.go(0);
    }, [])
      

    return <Redirect to='/' />
}

export default Logout;

