
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './App.module.css';

export default function App() {
  const contactsCount = useSelector(
    state => state.contacts.length
  );

  return (
    <main className={css.container}>
      <header className={css.header}>
        <p className={css.eyebrow}>Домашка</p>
        <h1 className={css.title}> Книга контактів</h1>
        <p className={css.subtitle}>
          Все зроблено
        </p>
      </header>

      <div className={css.layout}>
        <section className={css.card}>
          <h2>Новий контакт</h2>
          <ContactForm />
        </section>

        <section className={css.card}>
          <div className={css.heading}>
            <h2>Мої контакти</h2>
            <span className={css.count}>{contactsCount}</span>
          </div>
          <Filter />
          <ContactList />
        </section>
      </div>
    </main>
  );
}
