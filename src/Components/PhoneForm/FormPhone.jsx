import { Component } from 'react';
import shortId from 'shortid';

// import './App.css';

const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};

class FormPhone extends Component {
  state = {
    ...INITIAL_STATE_FORM,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const id = shortId.generate();
    const { onFormSubmit } = this.props;

    const formIsValid = this.validatorInput();
    if (!formIsValid) {
      return;
    }

    onFormSubmit({ id, ...this.state });
    this.resetForm();
  };

  validatorInput = () => {
    const { name, number } = this.state;
    const { onValid } = this.props;
    if (!name || !number) {
      alert('Field "name" and "number" is entry. Try again!');
      return false;
    }

    return onValid(name);
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE_FORM });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor={'unicID'}>
          Number
          <input
            name="number"
            type="text"
            value={number}
            placeholder="Enter your number"
            onChange={this.handleInputChange}
            id={'unicID'}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormPhone;
