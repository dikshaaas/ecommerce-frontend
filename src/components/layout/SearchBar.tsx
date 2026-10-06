import searchIcon from "../../assets/icons/Search.svg";
import listIcon from "../../assets/icons/list.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-box">
        <img
          src={searchIcon}
          alt=""
          className="search-icon"
        />

        <span>Search essentials, groceries, and more...</span>
      </div>

      <div className="list-icon">
        <img
          src={listIcon}
          alt=""
        />
      </div>
    </div>
  );
}

export default SearchBar;
