import React, { useEffect } from 'react'; // { useState, useEffect }
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  selectCurrentNote,
  selectIsShowModal,
  selectNotes,
  selectIsEditMode,
} from 'redux/notes/notesSelector';

import { ReactComponent as DeleteIcon } from '../assets/svg/delete.svg';
import { ReactComponent as AddIcon } from '../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../assets/svg/edit.svg';

import style from '../Workspace/Workspace.module.css';
import { addNote } from 'redux/notes/notesThunk';
import { nanoid } from 'nanoid';
import {
  setCurrentNote,
  setIsShowModal,
  setIsEditMode,
} from '../../redux/notes/notesSlice';

const Workspace = () => {
  const notes = useSelector(selectNotes);
  const currentNote = useSelector(selectCurrentNote);
  const isShowModal = useSelector(selectIsShowModal);
  const isEditMode = useSelector(selectIsEditMode);

  let selectedtNote = notes[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsEditMode(false));
  }, [currentNote]);

  const handleShowModalDelete = () => {
    dispatch(setIsShowModal(true));
  };

  const handleEditMode = e => {
    dispatch(setIsEditMode(true));
  };

  const handleAddNote = () => {
    const newNote = {
      noteDate: new Date(),
      noteText: '',
    };
    dispatch(addNote(newNote));
    dispatch(setCurrentNote(selectedtNote));
  };

  return (
    <>
      <div className={style.workspaceBox}>
        <button className={style.workspaceBtn} onClick={handleAddNote}>
          <AddIcon />
        </button>
        <button className={style.workspaceBtn} onClick={handleShowModalDelete}>
          <DeleteIcon />
        </button>
        <button className={style.workspaceBtn} onClick={handleEditMode}>
          <EditIcon />
        </button>
      </div>
    </>
  );
};

export default Workspace;
