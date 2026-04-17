
const Search = () => {
  return (
    <div className="search-div">
      <input
        type="text"
        className="search"
        placeholder="Search for..."
        defaultValue=""
      />
      <button className="searchButton" type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
