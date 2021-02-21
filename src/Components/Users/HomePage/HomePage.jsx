import { useSelector, useDispatch } from 'react-redux';
import { Typography, Avatar, Paper, Button } from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { authSelectors, authOperations } from '../../../redux/auth';

const { getIsLogIn, getUserName } = authSelectors;
const { logOut } = authOperations;

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

const HomePage = ({ classes }) => {
  const isLogIn = useSelector(getIsLogIn);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <main className={classes.main}>
      <Paper
        className={classes.paper}
        style={{ backgroundColor: 'rgba(107,224,214,0.7)' }}
      >
        <Avatar className={classes.avatar}>
          <VerifiedUserOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hello {isLogIn ? name[0].toUpperCase() + name.slice(1) : 'Guest'}!!!
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          component={Link}
          to="/register"
          className={classes.submit}
          disabled={isLogIn ? true : false}
        >
          Register
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
          className={classes.submit}
          disabled={isLogIn ? true : false}
        >
          Login
        </Button>
        {isLogIn && (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(logOut())}
            className={classes.submit}
          >
            LogOut
          </Button>
        )}
      </Paper>
      {isLogIn && (
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          component={Link}
          to="/phonebook"
          className={classes.button}
          style={{
            marginTop: '20px',
            backgroundColor: 'rgb(57,129,69,0.9)',
            height: '50px',
          }}
        >
          Phonebook
        </Button>
      )}
    </main>
  );
};
export default withStyles(styles)(HomePage);
