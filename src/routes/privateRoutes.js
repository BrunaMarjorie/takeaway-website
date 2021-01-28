import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const isAuth = sessionStorage.getItem('user');
  return (
      <Route
          {...rest}
          render={props =>
              isAuth ? (
                  <Component {...props} {...rest} />
              ) : (
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