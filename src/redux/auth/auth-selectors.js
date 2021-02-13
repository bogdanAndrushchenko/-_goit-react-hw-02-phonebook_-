const getIsLogIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLogIn,
  getUserName,
};

export default authSelectors;
