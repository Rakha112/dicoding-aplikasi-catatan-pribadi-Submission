import React from "react";
import "../styles/headerStyle.css";
const Header = ({ onClick }) => {
  return (
    <header className="catatan-app__header">
      <div className="catatan-app__header-container">
        <h1>Catatan</h1>
        <button className="catatan-buat" onClick={onClick}>
          <img
            src={require("../assets/PlusIcon.png")}
            alt="plus-icon"
            className="plus-icon"
          />
          Buat Catatan
        </button>
      </div>
    </header>
  );
};

export default Header;
