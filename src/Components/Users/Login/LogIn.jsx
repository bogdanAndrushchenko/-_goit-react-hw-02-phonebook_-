import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; //LockOutLined
import { authOperations } from '../../../redux/auth';
import { toast } from 'react-toastify';

const { logIn } = authOperations;

const styles = theme => ({
  main: {
    with: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(40 + theme.spacing.unit * 2 * 3)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px 
        ${theme.spacing.unit * 3}px 
        ${theme.spacing.unit * 2}px 
        ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SignIn = ({ classes }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  const login = e => {
    e.preventDefault();
    const formIsValid = validatorInput();
    if (!formIsValid) {
      return;
    }
    dispatch(logIn({ email, password }));
    resetForm();
  };
  const validatorInput = () => {
    if (!email || !password) {
      toast.error('Field "email" or "password" is entry. Try again!', {
        autoClose: 4000,
        position: 'top-center',
      });
      return false;
    }
    return true;
  };

  return (
    <main className={classes.main}>
      <Paper
        className={classes.paper}
        style={{ backgroundColor: 'rgb(125,217,169,0.8)' }}
      >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={login} autoComplete="off">
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
              value={email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoFocus
              value={password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={login}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
            className={classes.submit}
          >
            Register
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            className={classes.submit}
          >
            Go back to Home
          </Button>
        </form>
      </Paper>
    </main>
  );
};
export default withStyles(styles)(SignIn);
