import React from "react";
import CatatanItem from "./CatatanItem";
import "../styles/catatanListStyle.css";
const CatatanList = ({ data, onDelete, onArsip }) => {
  return (
    <div className="catatan-list">
      {data.map((item) => {
        return (
          <CatatanItem
            item={item}
            judul={item.title}
            tanggal={item.createdAt}
            id={item.id}
            isi={item.body}
            key={item.id}
            onDelete={onDelete}
            onArsip={onArsip}
          />
        );
      })}
    </div>
  );
};

export default CatatanList;
