import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsShowModal } from 'redux/notes/notesSelector';

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
