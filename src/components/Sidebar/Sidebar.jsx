import { useSelector, useDispatch } from 'react-redux';
import { updateNote } from 'store/noteSlice';

const Sidebar = () => {
  const notes = useSelector(state => state.notes.notes);

    const dispatch = useDispatch();
    
  return (
    <ul>
      {notes.map(note => (
          <li key={note.id}
              // onChange={editTextChange}
          {...note}
          >{note.noteText}</li>
      ))}
    </ul>
  );
};

export default Sidebar;
