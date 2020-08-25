import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../../../assets/img/logopemira.png";
import "./style.css";

const Menu = [
  { link: "/", name: "Home" },
  { link: "/tata-cara-pemilihan", name: "Tata Cara Pemilihan" },
  { link: "/visi-misi", name: "Visi Misi Paslon" },
  { link: "/rekapitulasi", name: "Rekapitulasi" },
];

function NavMenu() {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={Logo} alt="Logo Pemira" />
        </div>
        <div className="col-md">
          <div className="menu">
            <ul className="nav justify-content-end">
              {Menu.map((data, key) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={data.link}
                    key={key}
                  >
                    <li className="nav-item">
                      <span className="nav-link active">{data.name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
