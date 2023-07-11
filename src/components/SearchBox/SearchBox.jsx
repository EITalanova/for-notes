import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';

import style from '../SearchBox/SearchBox.module.css';
import { setFilter } from 'redux/notes/notesSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    dispatch(setFilter(searchText));
    return;
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
      <button className={style.searchBoxBtn} onClick={handleSearch}>
        <SearchIcon className={style.searchIcon} />
        Search
      </button>
    </div>
  );
};

export default SearchBox;
