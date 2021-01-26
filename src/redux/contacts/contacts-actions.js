import { createAction } from '@reduxjs/toolkit';

const onChangeFilter = createAction('contact/filter');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/addSuccess');
const addContactsError = createAction('contacts/addError');

const deleteContactsRequest = createAction('contacts/deleteRequest');
const deleteContactsSuccess = createAction('contacts/deleteSuccess');
const deleteContactsError = createAction('contacts/deleteError');

export default {
  onChangeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
};

// const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: shortId.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactID => ({
//   type: DELETE_CONTACT,
//   payload: contactID,
// });

// const onChangeFilter = value => ({
//   type: FILTER_CHANGE,
//   payload: value,
// });
