export const handleNoteData = noteDate => {
  const dateObj = new Date(noteDate);

  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const dayMonth = dateObj.getDate();
  const year = dateObj.getFullYear();
  const time = dateObj.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return `${month} ${dayMonth}, ${year} at ${time}`;
};

export const handleNoteListData = noteDate => {
  const dateObj = new Date(noteDate);

  return dateObj.toLocaleString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};
