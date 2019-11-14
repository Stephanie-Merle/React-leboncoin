import React from "react";
import SearchIcon from "./search-icon";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="input">
        <SearchIcon />
        <input type="text" placeholder="Que recherchez-vous?" />
      </div>
      <button>Rechercher</button>
    </div>
  );
};
export default SearchBox;
