import { Filter } from '../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from '../components/ContactList/ContactList';
import { FormAddContacts } from '../components/FormAddContacts/FormAddContacts';
import { fetchContacts } from 'redux/contacts/operations/fetchContacts ';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

function ContactPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        border: '2px solid #4b193e',
        padding: '40px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',

        color: '#4b193e',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          color: '#3a3639',
          textShadow: '-5px -3px 5px #B23479',
        }}
      >
        My Phonebook
      </h1>
      <FormAddContacts />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Контактів немає</p>
      )}
    </div>
  );
}

export default WithAuthRedirect(ContactPage, '/login');
