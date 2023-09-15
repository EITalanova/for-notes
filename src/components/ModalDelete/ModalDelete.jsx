import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectCurrentNote,
  selectIsShowModal,
  selectNotes,
} from 'redux/notes/notesSelector';
import { deleteNote } from 'redux/notes/notesThunk';
import { setIsShowModal } from 'redux/notes/notesSlice';

import { ReactComponent as CloseIcon } from '../assets/svg/close.svg';
import Notiflix from 'notiflix';

import style from '../ModalDelete/ModalDelete.module.css';

const ModalDelete = () => {
  const currentNote = useSelector(selectCurrentNote);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsShowModal(false));
  };

  const handleDeleteNote = () => {
    dispatch(setIsShowModal(false));
    dispatch(deleteNote(currentNote));
    Notiflix.Report.success(
      'Congratulations!',
      'Note successfully deleted. Click "Ok" to continue',
      'Ok'
    );
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);
    return () => document.removeEventListener('keydown', handleCloseModal);
  });

  return (
    <div className={style.modalOverlay} onClick={handleCloseModal}>
      <div className={style.modalDelete}>
        <button className={style.closeIcon} onClick={handleCloseModal}>
          <CloseIcon />
        </button>
        <p>Are you sure you want to delete this note?</p>
        <ul className={style.modalList}>
          <li>
            <button className={style.modalListBtn} onClick={handleDeleteNote}>
              Yes
            </button>
          </li>
          <li>
            <button className={style.modalListBtn} onClick={handleCloseModal}>
              No
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalDelete;
