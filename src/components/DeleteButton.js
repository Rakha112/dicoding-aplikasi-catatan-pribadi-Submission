import React from "react";
import "../styles/deleteButtonStyle.css";
const DeleteButton = ({ onDelete, id }) => {
  return (
    <div className="catatan-item__delete-button__container">
      <button
        className="catatan-item__delete-button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <img
          className="delete-icon"
          src={require("../assets/DeleteIcon.png")}
          alt="delete-icon"
        />
        Hapus
      </button>
    </div>
  );
};

export default DeleteButton;
