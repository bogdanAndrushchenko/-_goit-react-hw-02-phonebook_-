import { useState, useEffect } from 'react';

import './App.css';

import FormPhone from './Components/FormPhone';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';

const testContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Bogdan Andrush..', number: '899-24-76' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [...testContact];
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact =>
    setContacts(contacts => [...contacts, newContact]);

  const deleteContact = contactID => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactID));
  };

  const handleCheckUniqueContact = name => {
    const onName = !!contacts.find(contact => contact.name === name);
    alert(`${name} is already in contacts`);
    return !onName;
  };

  const changeFilterInput = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="Phonebook">
      <h2 className="Phonebook_title">Phonebook</h2>
      <FormPhone onFormSubmit={addContact} onValid={handleCheckUniqueContact} />
      <h3 className="Phonebook_title">Contacts</h3>
      <Filter onSearch={changeFilterInput} value={filter} />
      <PhoneList contacts={getFilterContact()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
