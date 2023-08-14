import { selectCurrentNote, selectIsEditMode } from 'redux/notes/notesSelector';
import { useDispatch, useSelector } from 'react-redux';

import { handleNoteData } from 'utils/handleNoteData';

import style from '../Note/Note.module.css';
import { useEffect, useState } from 'react';
import { updateNote } from 'redux/notes/notesThunk';
import { setCurrentNote } from 'redux/notes/notesSlice';

const Note = () => {
  const dispatch = useDispatch();
  const currentNote = useSelector(selectCurrentNote);
  const isEditMode = useSelector(selectIsEditMode);

  useEffect(() => {
    dispatch(setCurrentNote(currentNote));
  }, [currentNote, dispatch]);

  const handleEditText = e => {
    const updateDate = new Date();
    const updatedText = e.target.value;
    dispatch(
      updateNote({ note: currentNote, updatedData: { noteDate: updateDate, noteText: updatedText } })
    );
  };

  const handleEditTitle = e => {
    const updateDate = new Date();
    const updatedText = e.target.value;
    dispatch(
      updateNote({ note: currentNote, updatedData: { noteDate: updateDate, title: updatedText } })
    );
  };

  return (
    <div className={style.noteSection}>
      {currentNote && (
        <>
          <p className={style.noteDate}>
            {handleNoteData(currentNote.noteDate)}
          </p>
          <input
            // className={style.noteText}
            disabled={!isEditMode}
            value={currentNote.title}
            onChange={handleEditTitle}
          ></input>
          <textarea
            className={style.noteText}
            disabled={!isEditMode}
            value={currentNote.noteText}
            onChange={handleEditText}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Note;
