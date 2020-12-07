import PropTypes from 'prop-types';

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

export default Filter;
