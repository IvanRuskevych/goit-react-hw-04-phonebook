import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

function ContactsList({ list, deleteContact }) {
  return (
    <ul>
      {list.map(contact => {
        return (
          <Contact
            item={contact}
            key={nanoid(5)}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
