// components/nav.jsx
import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre La Empresa</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#analisis">Análisis</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
