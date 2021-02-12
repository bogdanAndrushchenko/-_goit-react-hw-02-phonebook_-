import { useEffect, Suspense, lazy } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom'; //BrowserRouter as Router

import HomePage from './Components/Users/HomePage';
import LogIn from './Components/Users/Login';
import Register from './Components/Users/Regicter';
import PhoneBook from './Components/Contacts/PhoneBook';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Loader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Suspense fallback={<Loader />}>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/phonebook">
            <LogIn />
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Register />
          </PublicRoute>
          {/*<PrivateRoute path="/phonebook" redirectTo="/login">*/}
          {/*    <PhoneBook />*/}
          {/*</PrivateRoute>*/}
        </Suspense>
      </Switch>
      <ToastContainer />
    </MuiThemeProvider>
  );
};

export default App;
