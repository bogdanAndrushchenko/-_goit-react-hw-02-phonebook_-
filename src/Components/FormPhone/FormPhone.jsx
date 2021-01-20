import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import contactActions from '../../redux/contacts/contacts-actions';
import s from './FormPhone.module.css';

const FormPhone = ({ contacts, onFormSubmit }) => {
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
    const formIsValid = validatorInput();
    if (!formIsValid) {
      return;
    }

    onFormSubmit(name, number);
    resetForm();
  };

  const handleCheckUniqueContact = name => {
    const onName = !!contacts.find(contact => contact.name === name);
    toast.success(`${name} is already in contacts`, { position: 'top-left' });
    return !onName;
  };

  const validatorInput = () => {
    if (!name || !number) {
      toast.error('Field "name" or "number" is entry. Try again!', {
        autoClose: 4000,
        position: 'top-center',
      });
      return false;
    }
    return handleCheckUniqueContact(name);
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
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (name, number) =>
    dispatch(contactActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPhone);
