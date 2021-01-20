// import {useState} from 'react'; //, useEffect
// import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';

import FormPhone from './Components/FormPhone';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// import * as actions from './redux/contacts/contacts-actions';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //     return JSON.parse(localStorage.getItem('contacts')) ?? [...testContact];
  // });
  // const [filter, setFilter] = useState('');

  // const addContact = newContact =>
  //     setContacts(contacts => [...contacts, newContact]);
  //
  // const deleteContact = contactID => {
  //     setContacts(contacts => contacts.filter(({id}) => id !== contactID));
  // };

  // const handleCheckUniqueContact = name => {
  //     const onName = !!contacts.find(contact => contact.name === name);
  //     toast.success(`${name} is already in contacts`,
  //         {position: "top-left"});
  //     return !onName;
  // };

  // const changeFilterInput = e => {
  //     setFilter(e.currentTarget.value);
  // };

  // const getFilterContact = () => {
  //     const normalizedFilter = filter.toLowerCase();
  //
  //     return contacts.filter(contact =>
  //         contact.name.toLowerCase().includes(normalizedFilter),
  //     );
  // };

  // useEffect(() => {
  //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="Phonebook">
      <h2 className="Phonebook_title">Phonebook</h2>
      <FormPhone />
      <h3 className="Phonebook_title">Contacts</h3>
      <Filter />
      <PhoneList />
      <ToastContainer />
    </div>
  );
};

export default App;
