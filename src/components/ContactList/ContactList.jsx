
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name
      .toLowerCase()
      .includes(filter.trim().toLowerCase())
  );

  if (visibleContacts.length === 0) {
    return (
      <p className={css.empty}>
        {contacts.length === 0
          ? 'Контактів поки немає. Додайте перший!'
          : 'Контактів не знайдено.'}
      </p>
    );
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
