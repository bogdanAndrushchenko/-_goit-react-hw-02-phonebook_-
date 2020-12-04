import React, { Component } from 'react';

// import './App.css';

class PhoneForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };
  addSubmitContact = () => {
    const contact = {
      id: 0,
      name: 0,
      number: 0,
    };
    console.log(contact);
  };

  render() {
    return (
      <form onSubmit={this.addSubmitContact}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor={'unicID'}>
          Number
          <input
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.handleInputChange}
            id={'unicID'}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneForm;
