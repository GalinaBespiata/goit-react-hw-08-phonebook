import css from '../ContactList/ContactList.module.css';
import { Contact } from '../ContactRender/ContactRender.jsx';
import { useSelector } from 'react-redux';

import { selectItems, selectFilter } from 'redux/contacts/selectors';

export function ContactList() {
  const contacts = useSelector(selectItems);

  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().trim().includes(filter.toLowerCase());
  });

  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
}
