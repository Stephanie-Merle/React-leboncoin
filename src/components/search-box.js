import React from "react";
import SearchIcon from "./search-icon";

const SearchBox = props => {
  return (
    <form className="search-box">
      <div className="input">
        <SearchIcon />
        <input
          type="text"
          placeholder="Que recherchez-vous?"
          onChange={props.changingValue}
        />
      </div>
      <button type="submit" onClick={e => props.submit(e)}>
        Rechercher
      </button>
    </form>
  );
};
export default SearchBox;
