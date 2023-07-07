import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  selectCurrentNote,
  selectIsShowModal,
  selectNotes,
} from 'redux/notes/notesSelector';
import { useDispatch, useSelector } from 'react-redux';


import Note from '../components/Note/Note';
import ModalDelete from '../components/ModalDelete/ModalDelete';
import SearchBox from '../components/SearchBox/SearchBox';
import NotesList from '../components/NotesList/NotesList';
import Workspace from '../components/Workspace/Workspace';

import notesArr from '../api/fakeData.json';

const Main = () => {
  const isShowModal = useSelector(selectIsShowModal);

  // eslint-disable-next-line
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const [notes, setNotes] = useState(notesArr);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [filterNotes, setFilterNotes] = useState([...notes]);
  // eslint-disable-next-line
  const [noteDate, setNoteDate] = useState('');

  const [noteText, setNoteText] = useState('');


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
      {isShowModal && <ModalDelete />}
    </div>
  );
};

export default Main;
