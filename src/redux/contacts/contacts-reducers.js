import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactActions } from './index';

const {
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
} = contactActions;

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [onChangeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default { contactReducer };

// import actionTypes from './contact-types-actions';
// const {ADD_CONTACT, DELETE_CONTACT, FILTER_CHANGE} = actionTypes;
// const itemsReducer = (state = [...testContact], { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//         case FILTER_CHANGE:
//             return payload;
//         default:
//             return state;
//     }
// };
