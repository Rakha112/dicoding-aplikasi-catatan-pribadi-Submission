import React from "react";
import Search from "./Search";
import "../styles/catatanBodyStyle.css";
import CatatanList from "./CatatanList";
const CatatanBody = ({ data, onDelete, onSearch, keyword, onArsip }) => {
  return (
    <div className="catetan-app__body">
      <Search onSearch={onSearch} keyword={keyword} />
      <h2 className="catetan-app__judul">Catatan Aktif</h2>
      {data(false).length > 0 ? (
        <CatatanList
          data={data(false)}
          onDelete={onDelete}
          keyword={keyword}
          onArsip={onArsip}
        />
      ) : (
        <h4 className="catatan-list__kosong">Belum Ada Catatan</h4>
      )}
      <h2 className="catetan-app__judul">Catatan Tersimpan</h2>
      {data(true).length > 0 ? (
        <CatatanList
          data={data(true)}
          onDelete={onDelete}
          keyword={keyword}
          onArsip={onArsip}
        />
      ) : (
        <h4 className="catatan-list__kosong">Belum Ada Catatan</h4>
      )}
    </div>
  );
};

export default CatatanBody;
