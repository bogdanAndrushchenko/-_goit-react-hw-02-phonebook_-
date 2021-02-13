const getIsLogIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getFetching = state => state.auth.isGettingCurrentUs;

const authSelectors = {
  getIsLogIn,
  getUserName,
  getFetching,
};

export default authSelectors;
