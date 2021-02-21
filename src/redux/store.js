import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { contactReducers } from './contacts';
import { authReducers } from './auth';

// const { contactReducer } = contactReducers;
// const {auth}=authReducers

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactReducers,
    auth: persistReducer(authPersistConfig, authReducers),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// console.log(reducer)
export const persistor = persistStore(store);
