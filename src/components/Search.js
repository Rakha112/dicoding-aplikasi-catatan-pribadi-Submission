import React from "react";
import "../styles/searchStyle.css";
const Search = ({ onSearch, keyword }) => {
  return (
    <div className="catatan-cari__container">
      <input
        className="catatan-cari"
        type="text"
        placeholder="Cari judul..."
        value={keyword}
        onChange={(e) => {
          onSearch(e);
        }}
      />
    </div>
  );
};

export default Search;
