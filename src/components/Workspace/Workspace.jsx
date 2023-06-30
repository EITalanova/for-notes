import React
// { useState, useEffect }
  from 'react';

// import { selectCurrentNote } from 'redux/notes/notesSelector';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../assets/svg/delete.svg';
import { ReactComponent as AddIcon } from '../assets/svg/add.svg';
import { ReactComponent as EditIcon } from '../assets/svg/edit.svg';

import style from '../Workspace/Workspace.module.css';

const Workspace = ({
  // handleShowModalDelete,
  // handleDisabled,
}) => {

  // const [disabled, setDisabled] = useState(true);
  // const [showModalDelete, setShowModalDelete] = useState(false);

  // const [notes, setNotes] = useState(notesArr);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  // const [filterNotes, setFilterNotes] = useState([...notes]);

  // const [noteText, setNoteText] = useState('');

  // const currentNote = useSelector(selectCurrentNote);


  // const handleDeleteNote = () => {
  //   filterNotes.splice(selectedItemIndex, 1);
  //   setNotes(filterNotes);
  //   setShowModalDelete(false);
  //   setDisabled(true);

  //     setSelectedItemIndex(filterNotes.length - 1);

  // };

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
  
  //  const handleAddNote = () => {
  //   setNoteText('');
  //   setNotes([
  //     ...notes,
  //     {
  //       id: nanoid(),
  //       noteDate: new Date().toLocaleDateString().replaceAll('.', '/'),
  //       noteText: '',
  //     },
  //   ]);
  //   setSelectedItemIndex(notes.length);
  // };


  return (
    <div className={style.workspaceBox}>
      <button className={style.workspaceBtn}
        // onClick={handleAddNote}
      >
        <AddIcon />
      </button>
      <button
       
        className={style.workspaceBtn}
        // onClick={handleShowModalDelete}
      >
        <DeleteIcon />
      </button>
      <button
       
        className={style.workspaceBtn}
        // onClick={handleDisabled}
      >
        <EditIcon />
      </button>
    </div>
  );
};

export default Workspace;
