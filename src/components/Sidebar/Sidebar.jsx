import style from '../Sidebar/Sidebar.module.css';

const Sidebar = ({ filterNotes, selectedItemIndex, handleNoteClick }) => {
  //   function a(string) {

  //   string.slice(string.indexOf('\n'));

  // };
  return (
    <ul className={style.notesList}>
      {filterNotes.map(({ noteText, id, noteDate }, index) => {
        const isSelectedNotes = selectedItemIndex === index;
        console.log(isSelectedNotes);
        return (
          <li
            className={`${style.notesListItem} ${
              isSelectedNotes ? `${style.selectedNotesListItem}` : ''
            }`}
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
        );
      })}
    </ul>
  );
};

export default Sidebar;
