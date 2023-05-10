import { useDispatch } from 'react-redux';
import { updateNote } from 'store/noteSlice';

const ListItem = ({ noteText, handleEditNote, disabled }) => {
  return (
    <div>
      <p>date</p>
      <p>ООО</p>
      <textarea
        disabled={disabled}
        value={noteText}
        onChange={handleEditNote}
      ></textarea>
    </div>
  );
};

export default ListItem;
