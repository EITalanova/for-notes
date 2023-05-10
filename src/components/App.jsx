import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix, { Notify } from 'notiflix';

import ListItem from './ListItem/ListItem';
import ModalDelete from './ModalDelete/ModalDelete';
import SearchBox from './SearchBox/SearchBox';

export const App = () => {
  const [disabled, setDisabled] = useState(true);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      noteText: 'zametochka0',
    },
    {
      id: nanoid(),
      noteText: 'zametochka1',
    },
    {
      id: nanoid(),
      noteText: 'zametochka2',
    },
    {
      id: nanoid(),
      noteText: 'zametochka3',
    },
  ]);

  const [selectedItemIndex, setSelectedItemIndex] = useState(notes.length - 1);
  const [filterNotes, setFilterNotes] = useState([...notes]);
  const [noteText, setNoteText] = useState(
    filterNotes[filterNotes.length - 1].noteText
  );

  const handleAddNote = () => {
    setNoteText('');
    setNotes([
      ...notes,
      {
        id: nanoid(),
        noteText: '',
      },
    ]);
    setSelectedItemIndex(notes.length);
  };

  useEffect(() => {
    setDisabled(true);
  }, [selectedItemIndex]);

  useEffect(() => {
    setFilterNotes([...notes]);
  }, [notes]);

  useEffect(() => {
    setNoteText(filterNotes[filterNotes.length - 1].noteText);
  }, [filterNotes]);

  const handleSearch = () => {
    if (!searchText) {
      setFilterNotes([...notes]);
      Notify.warning('Please enter your search details');
      return;
    }
    const filteredNotes = filterNotes.filter(note =>
      note.noteText
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase().trim())
    );

    if (filteredNotes.length === 0) {
      Notify.info('No results matching your search');
      return;
    } else {
      setFilterNotes(filteredNotes);
    }
  };

  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };

  const handleEditNote = e => {
    const updatedText = e.target.value;

    setNoteText(updatedText);
    setNotes(
      filterNotes.map((note, index) =>
        index === selectedItemIndex ? { ...note, noteText: updatedText } : note
      )
    );
  };

  const handleNoteClick = (noteText, itemIndex) => {
    setSelectedItemIndex(itemIndex);
    setNoteText(noteText);
  };

  const handleDeleteNote = () => {
    setShowModalDelete(true);

    filterNotes.splice(selectedItemIndex, 1);
    setNotes(filterNotes);
    // setNoteText(filterNotes[filterNotes.length - 1].noteText);
    setShowModalDelete(false);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={handleAddNote}>+</button>
          <button onClick={() => setShowModalDelete(true)}>X</button>
          <button onClick={() => setDisabled(false)}>✏️</button>

          <SearchBox
            handleSearch={handleSearch}
            handleChangeSearch={handleChangeSearch}
          ></SearchBox>
        </div>
        <ListItem
          noteText={noteText}
          handleEditNote={handleEditNote}
          disabled={disabled}
        ></ListItem>
      </div>
      <div>
        <ul>
          {filterNotes.map(({ noteText, id }, index) => (
            <li
              key={id}
              id={noteText}
              onClick={() => handleNoteClick(noteText, index)}
            >
              {noteText}
            </li>
          ))}
        </ul>
      </div>
      {showModalDelete && (
        <ModalDelete
          handleDeleteNote={handleDeleteNote}
          handleCloseModal={() => setShowModalDelete(false)}
        ></ModalDelete>
      )}
    </>
  );
};
