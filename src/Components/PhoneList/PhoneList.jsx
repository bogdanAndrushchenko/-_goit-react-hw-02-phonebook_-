import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Loader from '../Loader';
import { contactOperations, contactSelectors } from '../../redux/contacts';
import s from './PhoneList.module.css';

const { getContacts, deleteContacts } = contactOperations;
const { getFilterContact, getLoading } = contactSelectors;

const PhoneList = ({ loading, phoneList, deleteContact }) => {
  const dispatch = useDispatch();
  // // const items = useSelector(state => state.contacts.items);
  // // console.log(items);
  // console.log(filter)
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                  toast.warning(`Contact ${name} is deleted!`, {
                    position: 'top-left',
                    autoClose: 4000,
                  });
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

PhoneList.propTypes = {
  phoneList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  phoneList: getFilterContact(state),
  loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactID => dispatch(deleteContacts(contactID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
