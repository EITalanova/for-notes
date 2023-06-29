// import { useDispatch } from 'react-redux';
// import { updateNote } from 'store/noteSlice';

import { handleNoteData } from 'utils/handleNoteData';

import style from '../Note/Note.module.css';


const Note = ({ noteText, noteDate, id, handleEditNote, disabled }) => {
  return (
    <div className={style.noteSection}>
      <p className={style.noteDate}>{handleNoteData(noteDate)}</p>
      <textarea
        className={style.noteText}
        disabled={disabled}
        value={noteText}
        onChange={handleEditNote}
      ></textarea>
    </div>
  );
};

export default Note;
