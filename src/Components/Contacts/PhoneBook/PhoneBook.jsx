import FormPhone from '../FormPhone';
import PhoneList from '../PhoneList';
import Filter from '../Filter';

import s from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <div className={s.Phonebook}>
      <h2 className={s.Phonebook_title}>Phonebook</h2>
      <FormPhone />
      <h3 className={s.Phonebook_title}>Contacts</h3>
      <Filter />
      <PhoneList />
    </div>
  );
};

export default PhoneBook;
