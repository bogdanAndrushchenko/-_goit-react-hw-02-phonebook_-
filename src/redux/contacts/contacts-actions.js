import typeActions from './contact-types-actions';
import shortId from 'shortid';

const { ADD_CONTACT, DELETE_CONTACT, FILTER_CHANGE } = typeActions;

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
});

export const deleteContact = contactID => ({
  type: DELETE_CONTACT,
  payload: contactID,
});

export const onChangeFilter = value => ({
  type: FILTER_CHANGE,
  payload: value,
});
