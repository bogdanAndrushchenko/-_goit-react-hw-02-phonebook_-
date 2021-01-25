import axios from 'axios';
import shortId from 'shortid';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const getContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  const item = {
    id: shortId.generate(),
    name,
    number,
  };
  dispatch(addContactsRequest());
  try {
    const { data } = await axios.post('/contacts', item);
    dispatch(addContactsSuccess(data));
  } catch (e) {
    dispatch(addContactsError(e));
  }
};

export const deleteContacts = contactID => async dispatch => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`/contacts/${contactID}`);
    dispatch(deleteContactsSuccess(contactID));
  } catch (e) {
    dispatch(deleteContactsError(e));
  }
};
