import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const { register, logIn, logOut, getCurrentUser } = authOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isGettingCurrentUs: false,
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
    [getCurrentUser.pending](state) {
      state.isGettingCurrentUs = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isGettingCurrentUs = false;
    },
    [getCurrentUser.rejected](state) {
      state.isGettingCurrentUs = false;
    },
  },
});
console.log(authReducer.caseReducers);

export default authReducer.reducer;
