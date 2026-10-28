
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const newName = name.trim();
    const newNumber = number.trim();

    if (!newName || !newNumber) return;

    const exists = contacts.some(
      contact =>
        contact.name.toLowerCase() === newName.toLowerCase()
    );

    if (exists) {
      alert(`${newName} вже є у контактах!`);
      return;
    }

    dispatch(addContact(newName, newNumber));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Ім'я
      </label>
      <input
        className={css.input}
        id="name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Введіть ім'я"
        required
      />

      <label className={css.label} htmlFor="number">
        Номер телефону
      </label>
      <input
        className={css.input}
        id="number"
        type="tel"
        value={number}
        onChange={event => setNumber(event.target.value)}
        placeholder="+380 99 123 45 67"
        required
      />

      <button className={css.button} type="submit">
        + Додати контакт
      </button>
    </form>
  );
}
