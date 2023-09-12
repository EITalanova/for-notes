import React, { useEffect } from 'react'; // { useState, useEffect }
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  selectCurrentNote,
  // selectIsShowModal,
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
  const isEditMode = useSelector(selectIsEditMode);
  const dispatch = useDispatch();

  const [currentNoteId, setCurrentNoteId] = useState(null);

  useEffect(() => {
    if (currentNote) {
      setCurrentNoteId(currentNote.id);
    }
  }, [currentNote]);

  useEffect(() => {
    if (isEditMode) {
      dispatch(setIsEditMode(false));
    }
  }, [currentNoteId]);

  const handleShowModalDelete = () => {
    dispatch(setIsShowModal(true));
  };

  const handleEditMode = e => {
    dispatch(setIsEditMode(true));
  };

  const handleAddNote = () => {
    const newNote = {
      id: nanoid(),
      noteDate: new Date(),
      noteText: '',
      title: '',
    };
    dispatch(addNote(newNote));
    dispatch(setCurrentNote(notes[0]));
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
        <button
          disabled={isEditMode}
          className={style.workspaceBtn}
          onClick={handleEditMode}
        >
          <EditIcon />
        </button>
      </div>
    </>
  );
};

export default Workspace;
