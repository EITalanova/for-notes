import { selectCurrentNote } from 'redux/notes/notesSelector';
import { useSelector } from 'react-redux';

import { handleNoteData } from 'utils/handleNoteData';

import style from '../Note/Note.module.css';

const Note = ({ disabled }) => {
  const currentNote = useSelector(selectCurrentNote);

  return (
    <div className={style.noteSection}>
      {currentNote && (
        <>
          <p className={style.noteDate}>
            {handleNoteData(currentNote.noteDate)}
          </p>
          <textarea
            className={style.noteText}
            disabled={disabled}
            value={currentNote.noteText}
            // onChange={handleEditNote}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Note;
