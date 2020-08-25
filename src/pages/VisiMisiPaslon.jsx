import React, { Component } from "react";

import "./../style/css/style_visimisi.css";
import NavMenu from "./../component/Element/NavMenu";
import FirstPaslon from "./../assets/img/paslon1.png";
import SecondPaslon from "./../assets/img/paslon2.png";

export default class VisiMisiPaslon extends Component {
  render() {
    return (
      <>
        <div className="container">
          <NavMenu />
          <div className="row">
            <div className="col-md">
              <div className="header">
                <h3>
                  Daftar Pasangan
                  <br />
                  Calon Ketua dan Wakil Ketua Himpunan Mahasiswa Grafika
                  Penerbitan <br />
                  Pemilihan Raya Jurusan TGP Tahun 2020
                </h3>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-7">
              <div className="paslon1">
                <h3>1</h3>
                <img
                  className="img-fluid_paslon1"
                  src={FirstPaslon}
                  alt="Pasangan Calon 1"
                />
                <h5> Spongebob-Patrick</h5>
                <h3>Visi</h3>
                <p> xxxx </p>
                <h3>Misi</h3>

                <li> xxxx </li>
                <li> xxxx </li>
                <li> xxxx </li>
              </div>
            </div>
            <div className="col-md">
              <div className="paslon2">
                <h3>2</h3>
                <img
                  className="img-fluid_paslon2"
                  src={SecondPaslon}
                  alt="Pasangan Calon 2"
                />
                <h5> Squidward-Krabs</h5>
                <h3>Visi</h3>
                <p> xxxx </p>
                <h3>Misi</h3>

                <li> xxxx </li>
                <li> xxxx </li>
                <li> xxxx </li>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
