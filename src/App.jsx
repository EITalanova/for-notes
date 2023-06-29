import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import ListItem from './components/ListItem/ListItem';
import ModalDelete from './components/ModalDelete/ModalDelete';
import SearchBox from './components/SearchBox/SearchBox';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';

import notesArr from './api/fakeData.json';

export const App = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [notes, setNotes] = useState(notesArr);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [filterNotes, setFilterNotes] = useState([...notes]);
  const [noteDate, setNoteDate] = useState('');

  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    setNoteText('');
    setNotes([
      ...notes,
      {
        id: nanoid(),
        noteDate: new Date().toLocaleDateString().replaceAll('.', '/'),
        noteText: '',
      },
    ]);
    setSelectedItemIndex(notes.length);
  };

  useEffect(() => {
    setFilterNotes([...notes]);
    setDisabled(true);
    // eslint-disable-next-line
  }, [selectedItemIndex]);

  useEffect(() => {
    if (filterNotes.length > 0) {
      setNoteDate(filterNotes[filterNotes.length - 1].noteDate);
    }
    // eslint-disable-next-line
  }, [noteText]);

  useEffect(() => {
    if (filterNotes.length > 0) {
      setFilterNotes([...notes]);
    }
    // eslint-disable-next-line
  }, [notes]);

  useEffect(() => {
    if (filterNotes.length > 0) {
      setNoteDate(filterNotes[filterNotes.length - 1].noteDate);
      setNoteText(filterNotes[filterNotes.length - 1].noteText);
    }
    // eslint-disable-next-line
  }, [filterNotes.length]);

  const handleSearch = () => {
    if (!searchText) {
      setFilterNotes(notes);
      return;
    }
    const filteredNotes = filterNotes.filter(note =>
      note.noteText.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );

    if (!filteredNotes.length) {
      setSearchText('');

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
        index === selectedItemIndex
          ? {
              ...note,
              noteText: updatedText,
              noteDate: new Date().toLocaleDateString().replaceAll('.', '/'),
            }
          : note
      )
    );
  };

  const handleNoteClick = (noteText, itemIndex, noteDate) => {
    setSelectedItemIndex(itemIndex);
    setNoteText(noteText);
    setNoteDate(noteDate);
    setDisabledBtn(false);
  };

  const handleDeleteNote = () => {
    filterNotes.splice(selectedItemIndex, 1);
    setNotes(filterNotes);
    setShowModalDelete(false);
    setDisabled(true);

      setSelectedItemIndex(filterNotes.length - 1);

  };

  return (
    <>
      <div className="toolbarBox">
        <Workspace
          disabledBtn={disabledBtn}
          handleAddNote={handleAddNote}
          handleShowModalDelete={() => setShowModalDelete(true)}
          handleDisabled={() => setDisabled(false)}
        />

        <SearchBox
          handleSearch={handleSearch}
          handleChangeSearch={handleChangeSearch}
        />
      </div>

      <div className="noteListBox">
        <Sidebar
          selectedItemIndex={selectedItemIndex}
          filterNotes={filterNotes}
          handleNoteClick={handleNoteClick}
        />

        <ListItem
          noteDate={Date(noteDate)}
          noteText={noteText}
          handleEditNote={handleEditNote}
          disabled={disabled}
        />
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
