import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';

function Filter({ filterValue, onChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name
      <TextField
        id="standard-basic"
        label="Print name ..."
        variant="standard"
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange('filter')}
      />
    </label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
