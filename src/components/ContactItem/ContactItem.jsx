
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactItem.module.css';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div className={css.info}>
        <span className={css.avatar}>
          {contact.name.charAt(0).toUpperCase()}
        </span>

        <div>
          <p className={css.name}>{contact.name}</p>
          <a className={css.number} href={`tel:${contact.number}`}>
            {contact.number}
          </a>
        </div>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Видалити
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
