import { selectCurrentNote, selectIsEditMode } from 'redux/notes/notesSelector';
import { useSelector } from 'react-redux';

import { handleNoteData } from 'utils/handleNoteData';

import style from '../Note/Note.module.css';
import { useEffect, useState } from 'react';

const Note = () => {
  const [editMode, setEditMode] = useState(false);
  const currentNote = useSelector(selectCurrentNote);
  let isEditMode = useSelector(selectIsEditMode);

  useEffect(() => {
  setEditMode(isEditMode)
}, [currentNote])

  return (
    <div className={style.noteSection}>
      {currentNote && (
        <>
          <p className={style.noteDate}>
            {handleNoteData(currentNote.noteDate)}
          </p>
          <textarea
            className={style.noteText}
            disabled={!isEditMode}
            value={currentNote.noteText}
            // onChange={handleEditNote}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Note;
