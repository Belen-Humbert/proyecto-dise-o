import Nav from "../components/nav";  // Importar la barra de navegación

const Lila = () => {
  return (
    <>
      <Nav />  {/* Incluir la barra de navegación */}
      <div id="home">
        <h1>Bienvenido a Lila</h1>
        <p>Esta es la página principal.</p>
      </div>
      <div id="about">
        <h2>Sobre La Empresa</h2>
        <p>Descripción sobre la empresa.</p>
      </div>
      <div id="organigrama">
        <h2>Organigrama</h2>
        <p>Organización de la empresa.</p>
      </div>
      <div id="analisis">
        <h2>Análisis</h2>
        <p>Servicios de análisis y auditoría.</p>
      </div>
    </>
  );
};

export default Lila;
