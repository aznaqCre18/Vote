import React, { Component } from "react";

import "./../style/css/style_rekapitulasi.css";
import NavMenu from "./../component/Element/NavMenu";
import InvoiceIcon from "./../assets/img/icon_suara_masuk.png";
import TotalMhs from "./../assets/img/icon_total_mahasiswa.png";
import PesentaseIcon from "./../assets/img/icon_persentase_suara.png";
import FirstPaslon from "./../assets/img/paslon1.png";
import SecondPaslon from "./../assets/img/paslon2.png";

export default class Rekapitulasi extends Component {
  render() {
    return (
      <>
        <div className="container">
          <NavMenu />
          <div className="row">
            <div className="col-md-3">
              <div className="header1">
                <h3>Data Masuk</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="suara_masuk">
                <h4>400</h4>
                <img className="icon" src={InvoiceIcon} alt="Suara Masuk" />
                <h4>Suara Masuk</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="total_mahasiswa">
                <h4>1000</h4>
                <img className="icon" src={TotalMhs} alt="Total Mahasiswa" />
                <h4>Total Mahasiswa</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="presentase_suara">
                <h4>40%</h4>
                <img className="icon" src={PesentaseIcon} alt="Persentase" />
                <h4>Persentase Suara Masuk</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div className="header1">
                  <h3>Perolehan Suara</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="perolehan_suara_paslon1">
                  <h3>1</h3>
                  <img
                    className="img-fluid_paslon"
                    src={FirstPaslon}
                    alt="Pasangan Calon 1"
                  />
                  <br />
                  <br />
                  <h5>Spongebob-Patrick</h5>
                  <h2>60%</h2>
                  <h3>Suara Masuk</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="perolehan_suara_paslon2">
                  <h3>2</h3>
                  <img
                    className="img-fluid_paslon"
                    src={SecondPaslon}
                    alt="Pasangan Calon 2"
                  />
                  <br />
                  <br />
                  <h5>Squidward-Krabs</h5>
                  <h2>40%</h2>
                  <h3>Suara Masuk</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
