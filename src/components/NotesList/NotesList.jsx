import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix';

import {
  selectNotes,
  selectCurrentNote,
  selectFilter,
} from 'redux/notes/notesSelector';
import { setCurrentNote, setIsEditMode } from 'redux/notes/notesSlice';

import { fetchNotes } from 'redux/notes/notesThunk';

import style from '../NotesList/NotesList.module.css';

const NotesList = () => {
  const notes = useSelector(selectNotes);
  const filter = useSelector(selectFilter);
  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    dispatch(setCurrentNote(notes[0]));
  }, [notes.length]);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  useEffect(() => {
    const filteredNotes = notes.filter(
      note =>
        note.noteText
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase()) ||
        note.noteTitle.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    setFilteredNotes(filteredNotes);
  }, [filter]);

  const handleSelectNote = id => {
    const selectedNote = notes.find(note => note.id === id);
    dispatch(setCurrentNote(selectedNote));
  };

  return (
    <ul className={style.notesList}>
      {notes &&
        notes.map(({ noteText, id, noteDate, noteTitle }) => {
          const isSelectedNotes = currentNote.id === id;
          return (
            <li
              className={`${style.notesListItem} ${
                isSelectedNotes ? `${style.selectedNotesListItem}` : ''
              }`}
              key={id}
              onClick={() => handleSelectNote(id)}
            >
              <p className={style.notesListTitle}>{noteTitle}</p>
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
