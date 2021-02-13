import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success('User registred');
    return data;
  } catch (e) {
    console.error(e);
    toast.error(e.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('User is logined');
    return data;
  } catch (e) {
    console.error(e);
    toast.error(e.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('/users/logout', credentials);
    token.unSet();
    toast.success('User is logout');
    return data;
  } catch (e) {
    console.error(e);
    toast.error(e.message);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async () => {
  console.log('getCurrentUser');
});

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
