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

  const [note, setNote] = useState(currentNote);

  useEffect(() => {
    setNote(currentNote);
  }, [currentNote]);

  useEffect(() => {
    if (
      currentNote &&
      (currentNote.title !== note.title ||
        currentNote.noteText !== note.noteText)
    ) {
      const changeNote = setTimeout(() => {
        dispatch(updateNote(note));
      }, 700);

      return () => {
        clearTimeout(changeNote);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note]);

  const handleEditText = e => {
    const updateDate = new Date();
    const updatedText = e.target.value;
    setNote({
      ...note,
      noteDate: updateDate.toISOString(),
      noteText: updatedText,
    });
  };

  const handleEditTitle = e => {
    const updateDate = new Date();
    const updatedText = e.target.value;
    setNote({
      ...currentNote,
      noteDate: updateDate.toISOString(),
      title: updatedText,
    });
  };

  return (
    <div className={style.noteSection}>
      {note && (
        <>
          <p className={style.noteDate}>{handleNoteData(note.noteDate)}</p>
          <input
            className={style.noteTitle}
            disabled={!isEditMode}
            value={note.title}
            onChange={handleEditTitle}
          ></input>
          <textarea
            className={style.noteText}
            disabled={!isEditMode}
            value={note.noteText}
            onChange={handleEditText}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Note;
