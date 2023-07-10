import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotes } from 'redux/notes/notesSelector';
import { fetchNotes } from 'redux/notes/notesThunk';

import { Notify } from 'notiflix';

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';

import style from '../SearchBox/SearchBox.module.css';

const SearchBox = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const [filterNotes, setFilterNotes] = useState([...notes]);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleSearch = () => {
    if (!searchText) {
      // setFilterNotes(notes);
      return;
    }
    const filteredNotes = notes.filter(note =>
      note.noteText.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );

    if (!filteredNotes.length) {
      setSearchText('');

      Notify.info('No results matching your search');

      return;
    } else {
      setFilterNotes(filteredNotes);
    }
  };

  const handleChangeSearch = e => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={style.searchBox}>
      <input
        className={style.searchBoxField}
        onChange={handleChangeSearch}
        type="text"
      />
      <button className={style.searchBoxBtn} onClick={handleSearch}>
        <SearchIcon className={style.searchIcon} />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
