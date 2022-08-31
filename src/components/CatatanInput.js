import React from "react";
import "../styles/catatanInputStyle.css";

const InputCatatan = ({
  showInput,
  judul,
  isi,
  karakterJudul,
  onClick,
  onChangeJudul,
  onChangeIsi,
  simpanCatatan,
}) => {
  return (
    <div
      className={
        showInput
          ? "catatan-input__container"
          : "catatan-input__container__hidden"
      }
    >
      <div className="catatan-input__body">
        <div className="catatan-input__header">
          <h2>Buat Catatan</h2>
          <button className="close-button">
            <img
              className="close-icon"
              src={require("../assets/CloseIcon.png")}
              alt="close-icon"
              onClick={onClick}
            />
          </button>
        </div>
        <form>
          <input
            className="catatan-input__judul"
            type="text"
            placeholder="Tuliskan judul catatan di sini..."
            onChange={(e) => {
              onChangeJudul(e);
            }}
            value={judul}
          />
          <p>Sisa karakter: {karakterJudul}</p>
          <textarea
            className="catatan-input__isi"
            cols="30"
            rows="10"
            placeholder="Tuliskan isi catatan di sini..."
            onChange={(e) => {
              onChangeIsi(e);
            }}
            value={isi}
          ></textarea>
        </form>
        <div className="simpan-button__container">
          <button
            className="simpan-button"
            onClick={() => {
              simpanCatatan(judul, isi);
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputCatatan;
