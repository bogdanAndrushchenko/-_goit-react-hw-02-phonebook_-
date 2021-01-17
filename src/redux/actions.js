import { ADD_CONTACT, DELETE_CONTACT } from './typeActions';

export const addContact = newContact => ({
  type: ADD_CONTACT,
  payload: newContact,
});

export const deleteContact = contactID => ({
  type: DELETE_CONTACT,
  payload: contactID,
});
