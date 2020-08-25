import React, { Component } from "react";

import "./../style/css/style_tatacarapemilihan.css";
import NavMenu from "./../component/Element/NavMenu";

export default class TataCaraPemilihan extends Component {
  render() {
    return (
      <>
        <div className="container">
          <NavMenu />
          <div className="row">
            <div className="col-md">
              <div className="header">
                <h3>Tata Cara Pemilihan</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
