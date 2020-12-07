import React from 'react';
import PropTypes from 'prop-types';

import s from './PhoneList.module.css';

const PhoneList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.PhoneList}>
      <p>Total contacts : {contacts.length}</p>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.PhoneList_item}>
          {name} : <span>{number}</span>
          <button
            type="button"
            className={s.Button}
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

PhoneList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default PhoneList;
