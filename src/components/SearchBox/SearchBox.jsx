import Notiflix from 'notiflix';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/notes/notesSlice';

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';
import { ReactComponent as CloseIcon } from '../assets/svg/close.svg';

import style from '../SearchBox/SearchBox.module.css';

const SearchBox = ({ cssClass }) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (!searchText) {
      return Notiflix.Notify.info('Please enter text to search  ✍️');
    }
    return dispatch(setFilter(searchText));
  };

  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };

  const handleCleanSearch = () => {
    dispatch(setFilter(''));
    setSearchText('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={`${cssClass}`}>
      <label className={style.searchBoxLabel}>
        <input
          className={style.searchBoxField}
          onChange={handleChangeSearch}
          onKeyPress={handleKeyPress}
          value={searchText}
          type="text"
        />
        {searchText && (
          <button
            type="button"
            className={style.searchBoxCleanBtn}
            onClick={handleCleanSearch}
          >
            <CloseIcon className={style.cleanIcon} />
          </button>
        )}
      </label>
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
