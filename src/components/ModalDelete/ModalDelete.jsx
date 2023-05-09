const ModalDelete = ({ handleDeleteNote, handleCloseModal }) => {
  return (
    <div>
      <button onClick={handleCloseModal}>X
        <svg>
          <use>X</use>
              </svg>
              </button>
        <p>Are you sure you want to delete this note?</p>
        <ul>
          <li>
            <button onClick={handleDeleteNote}>Yes</button>
          </li>
          <li>
            <button onClick={handleCloseModal}>No</button>
          </li>
        </ul>
      
    </div>
  );
};

export default ModalDelete;