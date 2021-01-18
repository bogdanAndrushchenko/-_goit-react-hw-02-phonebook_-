import { combineReducers } from 'redux';

import actionTypes from './contact-types-actions';
import testContact from './contacts-test-items';

const { ADD_CONTACT, DELETE_CONTACT } = actionTypes;

const itemsReducer = (state = [...testContact], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => state;

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
