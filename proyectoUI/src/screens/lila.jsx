import React from "react";
import Nav from "../components/nav";  // Importar la barra de navegación

const Home = () => {
  return (
    <>
      <Nav />  {/* Incluir la barra de navegación */}
      <section id="home">
        <h1>Bienvenido a Lila</h1>
        <p>Esta es la página principal.</p>
      </section>
      <section id="about">
        <h2>Sobre La Empresa</h2>
        <p>Descripción sobre la empresa.</p>
      </section>
      <section id="organigrama">
        <h2>Organigrama</h2>
        <p>Organización de la empresa.</p>
      </section>
      <section id="analisis">
        <h2>Análisis</h2>
        <p>Servicios de análisis y auditoría.</p>
      </section>
    </>
  );
};

export default lila;
