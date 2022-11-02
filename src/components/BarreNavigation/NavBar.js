import React from "react";
import { NavLink } from "react-router-dom";
import '../Header/Header.css'

export default function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "activeLink" : "";
        }}
      >
        Acceuil
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
