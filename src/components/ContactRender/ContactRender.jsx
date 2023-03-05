import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from '../ContactRender/ContactRender.module.css';
import { removeContact } from 'redux/contacts/operations/removeContact';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(removeContact(contact.id));
  return (
    <li className={css.contact}>
      <div>
        {contact.name} : {contact.number}
      </div>
      <button
        className={css.textContact}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
