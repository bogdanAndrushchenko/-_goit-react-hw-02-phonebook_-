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
import { Link, withRouter } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { authOperations } from '../../../redux/auth';

const { register } = authOperations;

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

const Register = ({ classes }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onRegister = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    console.log('onRegister');
    // await firebase.register(name,email,password);
    resetForm();
  };
  return (
    <main className={classes.main}>
      <Paper className={classes.paper} style={{ backgroundColor: '#85c196' }}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Account:)
        </Typography>
        <form className={classes.form} onSubmit={onRegister} autoComplete="off">
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoFocus
              onChange={handleInputChange}
              value={name}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
              onChange={handleInputChange}
              value={email}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoFocus
              onChange={handleInputChange}
              value={password}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onRegister}
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
export default withRouter(withStyles(styles)(Register));
