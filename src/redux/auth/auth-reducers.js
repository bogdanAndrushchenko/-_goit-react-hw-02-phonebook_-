import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './index';

const { register, logIn, logOut, getCurrentUser } = authOperations;

const initioalState = {
  user: { name: null, email: null },
};
