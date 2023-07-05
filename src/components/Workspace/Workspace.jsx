import React from 'react'; // { useState, useEffect }
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectCurrentNote, selectNotes } from 'redux/notes/notesSelector';

import ModalDelete from '../ModalDelete/ModalDelete';

import { ReactComponent as DeleteIcon } from '../assets/svg/delete.svg';
import { ReactComponent as AddIcon } from '../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../assets/svg/edit.svg';

import style from '../Workspace/Workspace.module.css';
import { addNote } from 'redux/notes/notesThunk';
import { nanoid } from 'nanoid';
import { setIsShowModal } from '../../redux/notes/notesSlice';

const Workspace = () => {
  const notes = useSelector(selectNotes);
  const currentNote = useSelector(selectCurrentNote);

  const dispatch = useDispatch();

  // const [disabled, setDisabled] = useState(true);

  // const [notes, setNotes] = useState(notesArr);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  // const [filterNotes, setFilterNotes] = useState([...notes]);

  // const [noteText, setNoteText] = useState('');

  // const currentNote = useSelector(selectCurrentNote);

  const handleShowModalDelete = () => {
      dispatch(setIsShowModal(true));
  };

  // const handleEditNote = e => {
  // const updatedText = e.target.value;

  // setNoteText(updatedText);
  // setNotes(
  //   filterNotes.map((note, index) =>
  //     index === selectedItemIndex
  //       ? {
  //           ...note,
  //           noteText: updatedText,
  //           noteDate: new Date().toLocaleDateString().replaceAll('.', '/'),
  //         }
  //       : note
  //   )
  // );
  // };

  const handleAddNote = () => {
    const newNote = {
      noteDate: new Date(),
      noteText: '',
    };
    dispatch(addNote(newNote));
    console.log(notes);
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
          className={style.workspaceBtn}
          // onClick={handleDisabled}
        >
          <EditIcon />
        </button>
      </div>
      {/* {showModalDelete && <ModalDelete />} */}
    </>
  );
};

export default Workspace;
