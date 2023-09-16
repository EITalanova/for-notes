import React
// , { useState, useEffect }
  from 'react';
// import { nanoid } from 'nanoid';
import {
  // selectCurrentNote,
  selectIsShowModal,
  // selectNotes,
} from 'redux/notes/notesSelector';
import {
  // useDispatch,
  useSelector
} from 'react-redux';

import Note from '../components/Note/Note';
import ModalDelete from '../components/ModalDelete/ModalDelete';
import NotesList from '../components/NotesList/NotesList';
import Toolbar from 'components/Toolbar/Toolbar';
import ToolbarDown from 'components/ToolbarDown/ToolbarDown';

const Main = () => {
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <div>
      <Toolbar />

      <div className="noteListBox">
        <NotesList />
        <Note />
      </div>

      <ToolbarDown />

      {isShowModal && <ModalDelete />}
    </div>
  );
};

export default Main;
