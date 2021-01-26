import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getItems = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

const getFilterContact = createSelector(
  [getFilter, getItems],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getFilter,
  getItems,
  getLoading,
  getFilterContact,
};
