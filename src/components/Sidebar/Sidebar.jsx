import style from '../Sidebar/Sidebar.module.css';


const Sidebar = ({ filterNotes, handleNoteClick }) => {
  return (
    <ul className={style.notesList}>
      {filterNotes.map(({ noteText, id }, index) => (
        <li
           className={style.notesListItem}
          key={id}
          id={noteText}
          onClick={() => handleNoteClick(noteText, index)}
        >
          {noteText}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
