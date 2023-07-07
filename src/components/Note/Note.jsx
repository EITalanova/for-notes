import { selectCurrentNote, selectIsEditMode } from 'redux/notes/notesSelector';
import { useDispatch, useSelector } from 'react-redux';

import { handleNoteData } from 'utils/handleNoteData';

import style from '../Note/Note.module.css';
import { useEffect, useState } from 'react';
import { updateNote } from 'redux/notes/notesThunk';

const Note = () => {
  const dispatch = useDispatch();
  const currentNote = useSelector(selectCurrentNote);
  const isEditMode = useSelector(selectIsEditMode);

  
  const handleEditNote = (e) => {
    const updatedData = e.target.value;
    console.log(e.target.value);
    dispatch(updateNote(currentNote, updatedData));
  }
  


  return (
    <div className={style.noteSection}>
      {currentNote && (
        <>
          <p className={style.noteDate}>
            {handleNoteData(currentNote.noteDate)}
          </p>
          <textarea
            // className={style.noteText}
            disabled={!isEditMode}
            value={currentNote.noteText}
            onChange={handleEditNote}
          ></textarea>
          <textarea
            className={style.noteText}
            disabled={!isEditMode}
            value={currentNote.noteText}
            onChange={handleEditNote}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Note;
