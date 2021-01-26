import PhoneBook from './Components/PhoneBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <PhoneBook />
      <ToastContainer />
    </>
  );
};

export default App;
