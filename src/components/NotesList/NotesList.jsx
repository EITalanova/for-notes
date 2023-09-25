import Notiflix from 'notiflix';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { handleNoteListData } from 'utils/handleNoteData';
import {
  selectNotes,
  selectCurrentNote,
  selectFilter,
} from 'redux/notes/notesSelector';
import { setCurrentNote } from 'redux/notes/notesSlice';
import { fetchNotes } from 'redux/notes/notesThunk';

import style from '../NotesList/NotesList.module.css';

const NotesList = () => {
  const notes = useSelector(selectNotes);
  const filter = useSelector(selectFilter);
  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes.length, currentNote]);

  useEffect(() => {
    dispatch(setCurrentNote(filteredNotes[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredNotes.length]);

  useEffect(() => {
    dispatch(fetchNotes());
    setFilteredNotes(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const filteredNotesSearch = notes.filter(
      note =>
        note.noteText
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase()) ||
        note.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    if (filter.trim() === '') {
      setFilteredNotes(notes);
      return;
    }
    if (filteredNotesSearch.length) {
      setFilteredNotes(filteredNotesSearch);
    } else {
      Notiflix.Notify.failure('No results were found for your request  🤷‍♀️');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentNote]);

  const handleSelectNote = id => {
    const selectedNote = filteredNotes.find(note => note.id === id);
    dispatch(setCurrentNote(selectedNote));
  };

  return (
    <ul className={style.notesList}>
      {notes &&
        currentNote &&
        filteredNotes.map(({ noteText, id, noteDate, title }) => {
          const isSelectedNotes = currentNote.id === id;
          return (
            <li
              className={`${style.notesListItem} ${
                isSelectedNotes ? `${style.selectedNotesListItem}` : ''
              }`}
              key={id}
              onClick={() => handleSelectNote(id)}
            >
              <p className={style.notesListTitle}>{title}</p>
              <div className={style.notesListBox}>
                <span>{handleNoteListData(noteDate)}</span>
                <p className={style.notesListText}>{noteText}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default NotesList;
