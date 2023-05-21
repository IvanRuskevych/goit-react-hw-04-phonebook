import TextField from '@mui/material/TextField';
import css from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name
      <TextField
        id="standard-basic"
        label="Print name ..."
        variant="standard"
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
}
