import axios from 'axios';
import { toast } from 'react-toastify';

import actions from './contacts-actions';

axios.defaults.baseURL = 'http://http://localhost:3000';

const getContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const items = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(items));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
    // throw toast.error(error.message, {
    //     autoClose: 2000,
    // });
  }
};

export default getContacts;
