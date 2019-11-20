import React from "react";
import Style from "./search-box.module.css";
import { SearchOutlined } from "@material-ui/icons";

const SearchBox = props => {
  return (
    <form className={Style.searchBox}>
      <div className={Style.input}>
        <SearchOutlined />
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
