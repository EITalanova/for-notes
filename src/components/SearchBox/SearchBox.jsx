import Notiflix from 'notiflix';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';

import style from '../SearchBox/SearchBox.module.css';
import { setFilter } from 'redux/notes/notesSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (!searchText) {
      return Notiflix.Notify.failure('Please enter text to search  ✍️');
    }
    return dispatch(setFilter(searchText));
  };

  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };

  return (
    <div className={style.searchBox}>
      <input
        className={style.searchBoxField}
        onChange={handleChangeSearch}
        type="text"
      />
      <button
        type="button"
        className={style.searchBoxBtn}
        onClick={handleSearch}
      >
        <SearchIcon className={style.searchIcon} />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
