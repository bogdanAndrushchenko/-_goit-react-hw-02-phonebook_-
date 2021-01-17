import { createStore } from 'redux';

import testContact from './testContactItems';

const initialState = {
  contacts: {
    items: [...testContact],
    filter: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/add':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
