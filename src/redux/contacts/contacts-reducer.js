import { createReducer, combineReducers } from '@reduxjs/toolkit';

import action from './contacts-actions';
// import testContact from './contacts-test-items';

const itemsReducer = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [action.onChangeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
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
