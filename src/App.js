import { Component } from 'react';

import './App.css';

import FormPhone from './Components/FormPhone';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Bogdan Andrush..', number: '899-24-76' },
    ],
    filter: '',
  };

  addContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  deleteContact = contactID => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));
  };

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const onName = !!contacts.find(contact => contact.name === name);
    alert(`${name} is already in contacts`);
    return !onName;
  };

  changeFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const searchContact = this.getFilterContact();
    return (
      <div className="Phonebook">
        <h2 className="Phonebook_title">Phonebook</h2>
        <FormPhone
          onFormSubmit={this.addContact}
          onValid={this.handleCheckUniqueContact}
        />
        <h3 className="Phonebook_title">Contacts</h3>
        <Filter onSearch={this.changeFilterInput} value={filter} />
        <PhoneList
          contacts={searchContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
