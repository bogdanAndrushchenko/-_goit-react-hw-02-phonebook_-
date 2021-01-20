import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './PhoneList.module.css';
import actions from '../../redux/contacts/contacts-actions';

const PhoneList = ({ contacts, filter, deleteContact }) => {
  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const phoneList = getFilterContact();

  return (
    <ul className={s.PhoneList}>
      <p>Total contacts : {phoneList.length}</p>
      {phoneList.map(({ id, name, number }) => (
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactID => dispatch(actions.deleteContact(contactID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
