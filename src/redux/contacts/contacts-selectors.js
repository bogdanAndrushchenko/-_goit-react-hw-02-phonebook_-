const getFilter = state => state.contacts.filter;
const getItems = state => state.contacts.items;

const getFilterContact = state => {
  const normalizedFilter = getFilter(state);
  normalizedFilter.toLowerCase();
  const contacts = getItems(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default {
  getFilter,
  getItems,
  getFilterContact,
};
