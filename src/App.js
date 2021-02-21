import { useEffect, Suspense, lazy } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import HomePage from './Components/Users/HomePage';
import LogIn from './Components/Users/Login';
import Register from './Components/Users/Regicter';
import PhoneBook from './Components/Contacts/PhoneBook';
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';
import Loader from './Components/Loader';

import { authSelectors, authOperations } from './redux/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme();
const { getFetching } = authSelectors;
const { getRefreshUser } = authOperations;

const App = () => {
  const dispatch = useDispatch();
  const isGettingCurrentUs = useSelector(getFetching);

  useEffect(() => {
    dispatch(getRefreshUser());
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {!isGettingCurrentUs ? (
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LogIn />
            </PublicRoute>
            <PublicRoute
              exact
              path="/register"
              restricted
              redirectTo="/phonebook"
            >
              <Register />
            </PublicRoute>
            <PrivateRoute exact path="/phonebook">
              <PhoneBook />
            </PrivateRoute>
          </Suspense>
        </Switch>
      ) : (
        <Loader />
      )}
      <ToastContainer />
    </MuiThemeProvider>
  );
};

export default App;
//redirectTo="/login"
