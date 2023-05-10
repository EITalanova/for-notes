import { useDispatch } from 'react-redux';
import { updateNote } from 'store/noteSlice';

import style from '../ListItem/ListItem.module.css';


const ListItem = ({ noteText, handleEditNote, disabled }) => {
  return (
    <div className={style.listItem}>
      <p>date</p>
      <p>ООО</p>
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
