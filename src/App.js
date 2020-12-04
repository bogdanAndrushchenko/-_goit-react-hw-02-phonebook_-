import React, { Component } from 'react';

import './App.css';

import PhoneForm from './Components/PhoneForm';
import PhoneList from './Components/PhoneList';

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <div className="App_container">
        <h2>Phonebook</h2>
        <PhoneForm />
        {/*<PhoneList/>*/}
      </div>
    );
  }
}

export default App;
