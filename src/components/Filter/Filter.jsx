
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Знайти контакт
      </label>

      <input
        className={css.input}
        id="filter"
        type="text"
        value={filter}
        placeholder="Пошук за ім'ям..."
        onChange={event =>
          dispatch(setFilter(event.target.value))
        }
      />
    </div>
  );
}
