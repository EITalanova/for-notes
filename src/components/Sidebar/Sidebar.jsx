import style from '../Sidebar/Sidebar.module.css';

const Sidebar = ({ filterNotes, handleNoteClick }) => {
  return (
    <ul className={style.notesList}>
      {filterNotes.map(({ noteText, id, noteDate }, index) => (
        <li
          className={style.notesListItem}
          key={id}
          id={noteText}
          onClick={() => handleNoteClick(noteText, index, noteDate)}
        >
          <p className={style.notesListTitle}>{noteText}</p>
          <div className={style.notesListBox}>
            <span>{noteDate}</span>
            <p className={style.notesListText}>{noteText}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
