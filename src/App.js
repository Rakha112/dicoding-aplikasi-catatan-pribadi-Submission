import React, { Component } from "react";
import CatatanBody from "./components/CatatanBody";
import Header from "./components/Header";
import CatatanInput from "./components/CatatanInput";
import { getInitialData } from "./utils/index";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
      judul: "",
      karakterJudul: 50,
      isi: "",
      data: getInitialData(),
      tempData: getInitialData(),
      keyword: "",
    };
    // binding event handler
    this.onShowInputComponent = this.onShowInputComponent.bind(this);
    this.onChangeJudulHandler = this.onChangeJudulHandler.bind(this);
    this.onChangeIsiHandler = this.onChangeIsiHandler.bind(this);
    this.onSimpanCatatanHandler = this.onSimpanCatatanHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.dataCatatan = this.dataCatatan.bind(this);
  }

  dataCatatan = (isArchived) => {
    const data = this.state.data.filter((data) => data.archived === isArchived);
    return data;
  };
  onShowInputComponent = () => {
    const showInput = !this.state.showInput;
    this.setState({ showInput });
  };

  onChangeJudulHandler = (e) => {
    const karakterJudul = 50 - e.target.value.length;
    if (karakterJudul === 0) {
      const judul = this.state.judul;
      this.setState({ judul, karakterJudul });
      alert("Judul maksimal 50 karakter");
    } else {
      const judul = e.target.value;
      this.setState({ judul, karakterJudul });
    }
  };

  onChangeIsiHandler = (e) => {
    const isi = e.target.value;
    this.setState({ isi });
  };

  onSimpanCatatanHandler = (judul, isi) => {
    if (judul === "" && isi === "") {
      alert("Form Tidak Boleh Kosong");
    } else if (isi === "") {
      alert("Isi Catatan Tidak Boleh Kosong");
    } else if (judul === "") {
      alert("Judul Catatan Tidak Boleh Kosong");
    } else {
      const showInput = !this.state.showInput;
      this.setState((prevState) => {
        return {
          data: [
            ...prevState.tempData,
            {
              id: +new Date(),
              title: judul,
              body: isi,
              archived: false,
              createdAt: new Date(),
            },
          ],
          tempData: [
            ...prevState.tempData,
            {
              id: +new Date(),
              title: judul,
              body: isi,
              archived: false,
              createdAt: new Date(),
            },
          ],
          showInput,
          judul: "",
          isi: "",
          keyword: "",
          karakterJudul: 50,
        };
      });
    }
  };

  onDeleteHandler = (id) => {
    const data = this.state.data.filter((data) => data.id !== id);
    const tempData = this.state.tempData.filter((data) => data.id !== id);
    this.setState({ data, tempData });
  };

  onSearchHandler = (e) => {
    const keyword = e.target.value;
    const tempData = this.state.tempData;
    const data = tempData.filter((data) =>
      data.title.toLowerCase().includes(keyword.toLowerCase())
    );
    this.setState({ keyword, data });
  };

  onArsipHandler = (id) => {
    const tempData = this.state.tempData;
    const index = tempData.findIndex((data) => data.id === id);
    tempData[index].archived = !tempData[index].archived;
    this.setState({
      data: tempData,
      keyword: "",
    });
  };

  render() {
    return (
      <div className="app">
        <Header onClick={this.onShowInputComponent} />
        <CatatanInput
          showInput={this.state.showInput}
          onClick={this.onShowInputComponent}
          onChangeJudul={this.onChangeJudulHandler}
          onChangeIsi={this.onChangeIsiHandler}
          simpanCatatan={this.onSimpanCatatanHandler}
          judul={this.state.judul}
          isi={this.state.isi}
          karakterJudul={this.state.karakterJudul}
        />
        <CatatanBody
          data={this.dataCatatan}
          onDelete={this.onDeleteHandler}
          onSearch={this.onSearchHandler}
          keyword={this.state.keyword}
          onArsip={this.onArsipHandler}
        />
      </div>
    );
  }
}
