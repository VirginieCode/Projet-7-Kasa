import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import "./NavBar.css"

import style from "styled-components";

const navAStyle = style.nav`
@media only screen and (max-width: 768px){
font-size:12px;
}
`;


export default function NavBar() {
  return (
    <navAStyle>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "activeLink" : "";
        }}
      >
        Accueil
      </NavLink>

      <NavLink
        to="/APropos"
        className={({ isActive }) => {
          return isActive ? "activeLink" : "";
        }}
      >
        A Propos
      </NavLink>
    </nav>
    </navAStyle>
  );
}
