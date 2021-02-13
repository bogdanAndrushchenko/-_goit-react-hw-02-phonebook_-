import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const { getIsLogIn } = authSelectors;

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsLogIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
