import { useState, type SetStateAction } from "react";
import searchIcon from "../../assets/icons/Search.svg";
import listIcon from "../../assets/icons/list.svg";
import "./SearchBar.css";

function SearchBar({ onMenuClick }: { onMenuClick: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-box">
        <img src={searchIcon} alt="Search" className="search-icon" />

        <input
          type="text"
          placeholder="Search essentials, groceries, and more..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <button type="button" className="list-icon" aria-label="Open menu" onClick={onMenuClick}>
        <img src={listIcon} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
