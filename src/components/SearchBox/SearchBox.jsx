
const SearchBox = ({ handleChangeSearch, handleSearch}) => {

    return (
        <div>
            <input onChange={handleChangeSearch} type="text" />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBox;