import React from "react";
import "../styles/archiveButtonStyle.css";
const ArchiveButton = ({ onArsip, id, arsip }) => {
  return (
    <div className="catatan-item__archive-button__container">
      <button
        className="catatan-item__archive-button"
        onClick={(e) => {
          e.preventDefault();
          onArsip(id);
        }}
      >
        <img
          className="archive-icon"
          src={
            arsip
              ? require("../assets/UnArchiveIcon.png")
              : require("../assets/ArchiveIcon.png")
          }
          alt="archive-icon"
        />
        {arsip ? "Pindahkan" : "Simpan"}
      </button>
    </div>
  );
};

export default ArchiveButton;
