const Filter = ({ value, onSearch }) => (
  <label>
    Find contact by name
    <input
      type="text"
      value={value}
      onChange={onSearch}
      placeholder="search name"
    />
  </label>
);

export default Filter;
