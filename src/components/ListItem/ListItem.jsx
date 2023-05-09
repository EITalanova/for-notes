import { useDispatch } from 'react-redux';
import { updateNote } from 'store/noteSlice';

const ListItem = ({ noteText, handleEditNote, editTextChange }) => {
//   const dispatch = useDispatch();

//   const handleEditNote = (e) => {
    // dispatch(updateNote(e.target.id, e.target.noteText));
    // setNoteText(e.target.value);

//     // handleNoteUpdate(id, e.target.value);
      //   ;
//   }

  return (
    <div>
      <p>date</p>
      <p>ООО</p>
      <textarea value={noteText} onChange={handleEditNote}
        // onClick={handleNoteUpdate}
      ></textarea>
    </div>
  );
};

export default ListItem;
