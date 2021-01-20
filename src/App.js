import FormPhone from './Components/FormPhone';
import PhoneList from './Components/PhoneList';
import Filter from './Components/Filter';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //     return JSON.parse(localStorage.getItem('contacts')) ?? [...testContact];
  // });

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
