import { createStore } from 'redux';

import testContact from './testContactItems';

const initialState = {
  contacts: {
    items: [...testContact],
    // filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contact/add':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };
    case 'contact/delete':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(({ id }) => id !== payload),
        },
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
