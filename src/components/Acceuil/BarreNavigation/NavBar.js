import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        À Propos
      </NavLink>
    </nav>
  );
}
