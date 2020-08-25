import React, { Component } from "react";

import "./../style/css/style.css";
import NavMenu from "./../component/Element/NavMenu";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <NavMenu />
          <div className="row">
            <div className="col-md">
              <div className="header">
                <p>
                  {" "}
                  Selamat Datang
                  <br /> Di Pemungutan Suara Elektronik
                </p>
                <h1>Pemira Jurusan TGP 2020</h1>
                <p>
                  "Seorang pemimpin adalah seseorang yang jarang diketahui orang
                  banyak,
                  <br />
                  dan ketika ada sebuah pekerjaan dan tujuan yang berhasil
                  diselesaikan,
                  <br />
                  dia akan menjawab: kami melakukannya bersama-sama." Lao Tzu
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="kotak_daftar">
                  <h2>Daftar</h2>
                  <form>
                    <input
                      type="text"
                      name="nama"
                      className="form_login"
                      placeholder="E-mail"
                    />
                    <br />
                    <button type="submit" className="tombol_submit">
                      Submit
                    </button>
                    <p>
                      Jika sudah mendapatkan password,
                      <br />
                      lanjut masuk
                    </p>
                  </form>
                </div>
              </form>
            </div>
            <div className="col-md">
              <form>
                <div className="kotak_masuk">
                  <h2>Masuk</h2>
                  <form>
                    <input
                      type="text"
                      name="nama"
                      className="form_login"
                      placeholder="Nama"
                    />
                    <br />
                    <input
                      type="text"
                      name="nama"
                      className="form_login"
                      placeholder="NIM"
                    />
                    <br />
                    <input
                      list="kelas"
                      name="kelas"
                      className="form_login"
                      placeholder="Kelas"
                    />
                    <br />
                    <datalist id="kelas">
                      <option value="GR5A" />
                      <option value="GR5B" />
                      <option value="TICK5A" />
                    </datalist>
                    <input
                      type="password"
                      name="pass"
                      className="form_login"
                      placeholder="Kata Sandi"
                    />
                    <br />
                    <button type="submit" className="tombol_masuk">
                      Masuk
                    </button>
                    <br />
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
