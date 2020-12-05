import React from 'react';

// import './App.css';

const PhoneList = ({ contacts, searchContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : <span>{number}</span>
        </li>
      ))}
    </ul>
  );
};
export default PhoneList;
