import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Note from '../components/Note/Note';
import ModalDelete from '../components/ModalDelete/ModalDelete';
import SearchBox from '../components/SearchBox/SearchBox';
import NotesList from '../components/NotesList/NotesList';
import Workspace from '../components/Workspace/Workspace';

import notesArr from '../api/fakeData.json';

const Main = () => {
  // eslint-disable-next-line
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [notes, setNotes] = useState(notesArr);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [filterNotes, setFilterNotes] = useState([...notes]);
  // eslint-disable-next-line
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

  const handleNoteClick = (noteText, itemIndex, noteDate) => {
    setSelectedItemIndex(itemIndex);
    setNoteText(noteText);
    setNoteDate(noteDate);
    setDisabledBtn(false);
  };

  return (
    <div>
      <div className="toolbarBox">
        <Workspace
          handleAddNote={handleAddNote}
          handleShowModalDelete={() => setShowModalDelete(true)}
          handleDisabled={() => setDisabled(false)}
        />

        <SearchBox />
      </div>

      <div className="noteListBox">
        <NotesList
          selectedItemIndex={selectedItemIndex}
          filterNotes={filterNotes}
          handleNoteClick={handleNoteClick}
        />

        <Note disabled={disabled} />
      </div>
      {showModalDelete && (
        <ModalDelete
          // handleDeleteNote={handleDeleteNote}
          handleCloseModal={() => setShowModalDelete(false)}
        ></ModalDelete>
      )}
    </div>
  );
};

export default Main;
