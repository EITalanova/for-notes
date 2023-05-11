import { useDispatch } from 'react-redux';
import { updateNote } from 'store/noteSlice';

import style from '../ListItem/ListItem.module.css';

const ListItem = ({ noteText, noteDate, id, handleEditNote, disabled }) => {
  // const a = new Date()
  return (
    <div className={style.listItem}>
      <p className={style.listItemDate}>
        {new Date(noteDate).toLocaleString('en-US', { month: 'long' })}{' '}
        {new Date(noteDate).getDate()}, {new Date(noteDate).getFullYear()} at{' '}
        {new Date(noteDate).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </p>
      <textarea
        className={style.listItemText}
        disabled={disabled}
        value={noteText}
        onChange={handleEditNote}
      ></textarea>
    </div>
  );
};

export default ListItem;
