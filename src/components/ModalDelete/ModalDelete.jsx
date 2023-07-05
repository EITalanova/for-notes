import { ReactComponent as CloseIcon } from '../assets/svg/close.svg';

import style from '../ModalDelete/ModalDelete.module.css';

const ModalDelete = () => {

    // const handleDeleteNote = (id) => {

  //   // filterNotes.splice(selectedItemIndex, 1);
  //   // setNotes(filterNotes);
  //   setShowModalDelete(false);
  //   // setDisabled(true);

  //   //   setSelectedItemIndex(filterNotes.length - 1);

  // };

  // handleCloseModal={() => setShowModalDelete(false)}
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalDelete}>
        <button className={style.closeIcon}
          // onClick={handleCloseModal}
        >
        <CloseIcon/>
      </button>
      <p>Are you sure you want to delete this note?</p>
      <ul className={style.modalList}>
        <li>
            <button className={style.modalListBtn}
              // onClick={handleDeleteNote}
            >Yes</button>
        </li>
        <li>
            <button className={style.modalListBtn}
              // onClick={handleCloseModal}
            >No</button>
        </li>
        </ul>
        </div>
    </div>
  );
};

export default ModalDelete;
