import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectNotes, selectCurrentNote } from 'redux/notes/notesSelector';
import { setCurrentNote } from 'redux/notes/notesSlice';

import { fetchNotes } from 'redux/notes/notesThunk';

import style from '../NotesList/NotesList.module.css';

const NotesList = () => {
  const notes = useSelector(selectNotes);
  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleSelectNote = id => {
    const selectedNote = notes.find(note => note.id === id);
    dispatch(setCurrentNote(selectedNote));
  };

  return (
    <ul className={style.notesList}>
      {notes &&
        notes.map(({ noteText, id, noteDate }) => {
          const isSelectedNotes = currentNote.id === id;
          return (
            <li
              className={`${style.notesListItem} ${
                isSelectedNotes ? `${style.selectedNotesListItem}` : ''
              }`}
              key={id}
              onClick={() => handleSelectNote(id)}
            >
              <p className={style.notesListTitle}>{noteText}</p>
              <div className={style.notesListBox}>
                <span>{noteDate}</span>
                <p className={style.notesListText}>{noteText}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default NotesList;
