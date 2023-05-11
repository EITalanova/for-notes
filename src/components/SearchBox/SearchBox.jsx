import { ReactComponent as SearchIcon } from '../assets/images/search.svg';

import style from '../SearchBox/SearchBox.module.css';

const SearchBox = ({ handleChangeSearch, handleSearch }) => {
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
