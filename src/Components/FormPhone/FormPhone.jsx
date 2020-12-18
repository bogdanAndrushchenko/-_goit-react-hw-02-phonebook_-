import { useState } from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import s from './FormPhone.module.css';

const FormPhone = ({ onFormSubmit, onValid }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log(name);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const id = shortId.generate();

    const formIsValid = validatorInput();
    if (!formIsValid) {
      return;
    }

    onFormSubmit({ id, name, number });
    resetForm();
  };

  const validatorInput = () => {
    if (!name || !number) {
      alert('Field "name" and "number" is entry. Try again!');
      return false;
    }
    return onValid(name);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.Form}>
      <label className={s.Form_label}>
        <p>Name :</p>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </label>
      <label className={s.Form_label}>
        <p>Number :</p>
        <input
          name="number"
          type="number"
          value={number}
          placeholder="Enter your number"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={s.Button}>
        Add contact
      </button>
    </form>
  );
};

FormPhone.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired,
};

export default FormPhone;
