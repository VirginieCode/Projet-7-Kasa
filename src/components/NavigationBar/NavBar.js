import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import "./NavBar.css";

// Navigation bar creation

export default function NavBar() {
  return (
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
  );
}
