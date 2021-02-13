import { useSelector } from 'react-redux';
import { Typography, Avatar, Paper, Button } from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

const { getIsLogIn } = authSelectors;

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
  return (
    <main className={classes.main}>
      <Paper className={classes.paper} style={{ backgroundColor: '#72f3e8' }}>
        <Avatar className={classes.avatar}>
          <VerifiedUserOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hello Guest!!!
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
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
          color="secondary"
          component={Link}
          to="/login"
          className={classes.submit}
        >
          Login
        </Button>
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
            backgroundColor: 'rgba(73,159,126, 0.85)',
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
