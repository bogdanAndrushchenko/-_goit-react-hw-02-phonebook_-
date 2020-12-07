import { Component } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import s from './FormPhone.module.css';

const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};

class FormPhone extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
  };

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
      <form onSubmit={this.handleSubmitForm} className={s.Form}>
        <label className={s.Form_label}>
          <p>Name :</p>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.Form_label}>
          <p>Number :</p>
          <input
            name="number"
            type="number"
            value={number}
            placeholder="Enter your number"
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" className={s.Button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default FormPhone;
