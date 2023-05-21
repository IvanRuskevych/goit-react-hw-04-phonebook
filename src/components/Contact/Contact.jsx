import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import css from './Contact.module.css';

function Contact({ item, deleteContact }) {
  return (
    <>
      <li key={nanoid(5)} className={css.item}>
        {`${item.name}: ${item.number}`}
        <Button
          size="small"
          type="submit"
          onClick={() => deleteContact(item.id)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </li>

      {/* <button type="submit" onClick={() => deleteContact(item.id)}>
        delete
      </button> */}
    </>
  );
}

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Contact;
