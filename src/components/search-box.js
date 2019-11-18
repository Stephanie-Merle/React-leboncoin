import React from "react";
import SearchIcon from "./search-icon";

const SearchBox = props => {
  return (
    <form className="search-box" onSubmit={() => props.submit}>
      <div className="input">
        <SearchIcon />
        <input
          type="text"
          placeholder="Que recherchez-vous?"
          onChange={props.changingValue}
        />
      </div>
      <button type="submit">Rechercher</button>
    </form>
  );
};
export default SearchBox;
