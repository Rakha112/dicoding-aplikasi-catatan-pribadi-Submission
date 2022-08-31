import React from "react";
import { showFormattedDate } from "../utils/index";
import "../styles/catatanItemStyle.css";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
const CatatanItem = ({ item, onDelete, onArsip, judul, tanggal, isi, id }) => {
  return (
    <div className="catatan-item">
      <div className="catatan-conten">
        <h3 className="catatan-item__judul">{judul}</h3>
        <p className="catatan-item__tanggal">{showFormattedDate(tanggal)}</p>
        <p className="catatan-item__isi">{isi}</p>
      </div>
      <div className="catetin-item__button-container">
        <DeleteButton onDelete={onDelete} id={id} />
        <ArchiveButton onArsip={onArsip} id={id} arsip={item.archived} />
      </div>
    </div>
  );
};

export default CatatanItem;
