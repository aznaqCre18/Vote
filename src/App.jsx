import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import TataCaraPemilihan from "./pages/TataCaraPemilihan";
import VisiMisiPaslon from "./pages/VisiMisiPaslon";
import Rekapitulasi from "./pages/Rekapitulasi";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/tata-cara-pemilihan" component={TataCaraPemilihan} />
        <Route path="/visi-misi" component={VisiMisiPaslon} />
        <Route path="/rekapitulasi" component={Rekapitulasi} />
      </Router>
    );
  }
}
