import React from "react";
import SearchIcon from "./search-icon";
import Style from "./search-box.module.css";

const SearchBox = props => {
  return (
    <form className={Style.searchBox}>
      <div className={Style.input}>
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
