import "./search-box.styles.css";

function SearchBox({ searchCatHandler }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="search"
      onChange={searchCatHandler}
    />
  );
}

export default SearchBox;
