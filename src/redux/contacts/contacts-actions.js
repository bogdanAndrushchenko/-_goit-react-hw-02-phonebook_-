import { createAction } from '@reduxjs/toolkit';

export const onChangeFilter = createAction('contact/filter');

export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction('contacts/fetchSuccess');
export const fetchContactsError = createAction('contacts/fetchError');

export const addContactsRequest = createAction('contacts/addRequest');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactsError = createAction('contacts/addError');

export const deleteContactsRequest = createAction('contacts/deleteRequest');
export const deleteContactsSuccess = createAction('contacts/deleteSuccess');
export const deleteContactsError = createAction('contacts/deleteError');

// export default {
//   addContact,
//   deleteContact,
//   onChangeFilter,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// };

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
