import { Component } from 'react';

import './App.css';

import FormPhone from './Components/PhoneForm';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const onName = !!contacts.find(contact => contact.name === name);
    alert(`${name} is already in contacts`);
    return !onName;
  };
  changeFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getIncludesContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="Phonebook">
        <h2>Phonebook</h2>
        <FormPhone
          onFormSubmit={this.addContact}
          onValid={this.handleCheckUniqueContact}
        />
        <h3>Contacts</h3>
        <Filter onSearch={this.changeFilterInput} value={filter} />
        <PhoneList
          contacts={contacts}
          searchContact={this.getIncludesContact}
        />
      </div>
    );
  }
}

export default App;
