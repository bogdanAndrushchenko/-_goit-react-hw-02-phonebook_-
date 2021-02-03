import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom'; //BrowserRouter as Router

import HomePage from './Components/Users/HomePage';
import LogIn from './Components/Users/Login';
import Register from './Components/Users/Regicter';
import PhoneBook from './Components/Contacts/PhoneBook';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/phonebook" component={PhoneBook} />
      </Switch>
      <ToastContainer />
    </MuiThemeProvider>
  );
};

export default App;
