import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Workspace from './Workspace/Workspace';
import ListItem from './ListItem/ListItem';
import Sidebar from './Sidebar/Sidebar';

export const App = () => {
  const [showNoteField, setShowNoteField] = useState(false);
  const [noteText, setNoteText] = useState('');

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      noteText: 'zametochka2',
    },
    {
      id: nanoid(),
      noteText: 'zametochka1',
    },
    {
      id: nanoid(),
      noteText: 'zametochka1',
    },
    {
      id: nanoid(),
      noteText: 'zametochka1',
    },
  ]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleAddNote = () => {
    setShowNoteField(true);
    setNotes([
      ...notes,
      {
        id: nanoid(),
        noteText,
      },
    ]);
    setSelectedItemIndex(notes.length);
  };

  const handleEditNote = e => {
    const updatedText = e.target.value;

    setNoteText(updatedText);
      setNotes(
        notes.map((note, index) =>
          index === selectedItemIndex
            ? { ...note, noteText: updatedText }
            : note
        )
      );
    // }
  };

  const handleNoteClick = (noteText, itemIndex) => {
    setSelectedItemIndex(itemIndex);
    setNoteText(noteText);
  };

  //  const handleDeleteNote = (noteText, itemIndex) => {
  //   setSelectedItemIndex(itemIndex);
  //   setNoteText(noteText);
  // };

  return (
    <>
      <div>
        <button onClick={handleAddNote}>+</button>

        {showNoteField && (
          <ListItem
            noteText={noteText}
            handleEditNote={handleEditNote}
          ></ListItem>
        )}
      </div>
      <div>
        <ul>
          {notes.map(({ noteText, id }, index) => (
            <li
              key={id}
              id={noteText}
              onClick={() => handleNoteClick(noteText, index)}
            >
              {noteText}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
