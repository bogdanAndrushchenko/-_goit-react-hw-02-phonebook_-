import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

///
// import { composeWithDevTools } from 'redux-devtools-extension';
// createStore(rootReducer, composeWithDevTools());
//, combineReducers
