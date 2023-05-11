import { ReactComponent as CloseIcon } from '../assets/images/close.svg';

import style from '../ModalDelete/ModalDelete.module.css';

const ModalDelete = ({ handleDeleteNote, handleCloseModal }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalDelete}>
      <button className={style.closeIcon} onClick={handleCloseModal}>
        <CloseIcon/>
      </button>
      <p>Are you sure you want to delete this note?</p>
      <ul className={style.modalList}>
        <li>
          <button className={style.modalListBtn} onClick={handleDeleteNote}>Yes</button>
        </li>
        <li>
          <button className={style.modalListBtn} onClick={handleCloseModal}>No</button>
        </li>
        </ul>
        </div>
    </div>
  );
};

export default ModalDelete;
