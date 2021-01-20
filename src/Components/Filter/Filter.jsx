import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ value, onSearch }) => (
  <label className={s.Filter_label}>
    Find contact by name:
    <input
      type="search"
      value={value}
      onChange={onSearch}
      placeholder="search name"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onSearch: e => dispatch(contactActions.onChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
