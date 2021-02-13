import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const { getIsLogIn } = authSelectors;

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLogIn = useSelector(getIsLogIn);
  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
