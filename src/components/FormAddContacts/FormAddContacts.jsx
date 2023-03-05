import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations/addContact ';

import { selectItems } from 'redux/contacts/selectors';
import css from '../FormAddContacts/FormAddContacts.module.css';

export const FormAddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectItems);

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = {
      name,
      number,
    };

    if (
      contacts.some(el => {
        return el.name.toLowerCase() === contact.name.toLowerCase();
      })
    ) {
      alert('!!!');
      return;
    }

    dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formEl} onSubmit={handleSubmit}>
      <label>
        <span className={css.labelName}>Name</span>
        <input
          className={css.inputEl}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span className={css.labelTel}>Number</span>
        <input
          className={css.inputEl}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
