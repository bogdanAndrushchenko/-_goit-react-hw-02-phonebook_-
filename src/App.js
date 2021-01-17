import { useState } from 'react'; //, useEffect
import { connect } from 'react-redux';

import FormPhone from './Components/FormPhone';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';

import './App.css';
import * as actions from './redux/actions';

const App = ({ contacts, addContact, deleteContact }) => {
  // const [contacts, setContacts] = useState(() => {
  //     return JSON.parse(localStorage.getItem('contacts')) ?? [...testContact];
  // });
  const [filter, setFilter] = useState('');

  // const addContact = newContact =>
  //     setContacts(contacts => [...contacts, newContact]);
  //
  // const deleteContact = contactID => {
  //     setContacts(contacts => contacts.filter(({id}) => id !== contactID));
  // };

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

  // useEffect(() => {
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  // filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: newContact => dispatch(actions.addContact(newContact)),
  deleteContact: contactID => dispatch(actions.deleteContact(contactID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
