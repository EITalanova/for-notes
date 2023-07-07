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

const Main = () => {
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <div>
      <div className="toolbarBox">
        <Workspace />
        <SearchBox />
      </div>

      <div className="noteListBox">
        <NotesList />
        <Note />
      </div>

      {isShowModal && <ModalDelete />}
    </div>
  );
};

export default Main;
