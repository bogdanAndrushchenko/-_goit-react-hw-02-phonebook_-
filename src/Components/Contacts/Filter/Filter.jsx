import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactSelectors, contactActions } from '../../../redux/contacts';
import s from './Filter.module.css';

const { getFilter } = contactSelectors;
const { onChangeFilter } = contactActions;

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
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onSearch: e => dispatch(onChangeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
