import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// A wrapper for <Route> that redirects to the login
// screen if user is not yet authenticated.

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  //check session storage
  const isAuth = sessionStorage.getItem('user');
  return (
      <Route
          {...rest}
          render={props =>
              isAuth ? (
                //return Component if user is authenticated
                  <Component {...props} {...rest} />
              ) : (
                //redirect to login page if user is not authenticated
                      <Redirect
                          to={{
                              pathname: "/login",
                              state: {
                                from: props.location
                              }
                          }}
                      />
                  )
              }
      />
  );
}


export default PrivateRoute;