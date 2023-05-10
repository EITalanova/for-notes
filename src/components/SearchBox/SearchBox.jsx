import style from '../SearchBox/SearchBox.module.css';

const SearchBox = ({ handleChangeSearch, handleSearch }) => {
  return (
    <div className={style.searchBox}>
      <input className={style.searchBoxField} onChange={handleChangeSearch} type="text" />
      <button className={style.searchBoxBtn} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
