import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/Search.svg";
import listIcon from "../../assets/icons/list.svg";
import "./SearchBar.css";

function SearchBar({ onMenuClick }: { onMenuClick: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchQuery(new URLSearchParams(location.search).get("q") ?? "");
  }, [location.search]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch} role="search">
      <div className="search-box">
        <img src={searchIcon} alt="Search" className="search-icon" />

        <input
          type="text"
          placeholder="Search essentials, groceries, and more..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="search-input"
        />
      </div>

      <button type="button" className="list-icon" aria-label="Open menu" onClick={onMenuClick}>
        <img src={listIcon} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
