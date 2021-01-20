import { createAction } from '@reduxjs/toolkit';
import shortId from 'shortid';

const addContact = createAction('contact/add', (name, number) => {
  return {
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contact/delete');
const onChangeFilter = createAction('contact/filter');

export default {
  addContact,
  deleteContact,
  onChangeFilter,
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
