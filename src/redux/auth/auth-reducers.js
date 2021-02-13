import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const { register, logIn, logOut, getCurrentUser } = authOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [getCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  },
});
console.log(authReducer.caseReducers);

export default authReducer.reducer;
