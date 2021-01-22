import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://http://localhost:3000';

const getContacts = async () => {
  try {
    const { data } = await axios.get('/3000');
    return data;
  } catch (error) {
    throw toast.error(error.message, {
      autoClose: 2000,
    });
  }
};
