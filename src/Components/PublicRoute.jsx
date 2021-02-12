import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = restricted; //isLoggedIn &&
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
