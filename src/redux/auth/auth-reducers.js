import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const { register, logIn, logOut, getRefreshUser } = authOperations;

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
    // [register.pending](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
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
    [getRefreshUser.pending](state) {
      state.isGettingCurrentUs = true;
    },
    [getRefreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isGettingCurrentUs = false;
    },
    [getRefreshUser.rejected](state) {
      state.isGettingCurrentUs = false;
    },
  },
});

export default authReducer.reducer;
