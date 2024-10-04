import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tarjeta from "../components/tarjeta";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <title>AuditaWeb Solutions</title>

      {/* Navigation */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#portfolio">Auditorías Realizadas</a>
          </li>
          <li>
            <a href="#team">El Equipo</a>
          </li>
          <li>
            <a href="#footer">Contáctanos</a>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <div id="home" className="intro-header">
        <div className="bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>AuditaWeb Solutions</h1>
                  <h3>Potenciamos tu negocio, aseguramos tu futuro</h3>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* /.intro-header */}

      {/* Page Content */}
      <div id="about" className="content-section-a">
        <div className="bg-overlay2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="clearfix" />
                <h2 className="section-heading">AuditaWeb Solutions</h2>
                <br />
                <p className="lead">
                  En AuditaWeb Solutions, somos especialistas en brindar
                  soluciones integrales a empresas que buscan optimizar su
                  funcionamiento y expandir su presencia en el mundo digital.
                  Ofrecemos servicios de auditoría externa para garantizar la
                  eficiencia y el cumplimiento de las normativas en todos los
                  procesos de tu organización. Además, diseñamos y desarrollamos
                  páginas web personalizadas que reflejan la identidad de tu
                  marca y te conectan con tus clientes de manera efectiva. Con
                  nuestro enfoque multidisciplinario, ayudamos a las empresas a
                  crecer de manera segura y confiable, asegurando su éxito en el
                  mercado.
                </p>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </div>
      {/* Portfolio Grid Section */}
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Auditorías Realizadas</h2>
              <h3 id="below-section" className="section-subheading text-muted">
                Últimas auditorías realizadas
              </h3>
            </div>
          </div>
        </div>
        <div className="card-align">
          <Link to="/lila">
            <Tarjeta
              empresa={{
                name: "Lila software studio",
                descript: "odokdkkdkkdkd",
              }}
            />
          </Link>
          <Link to="/Ies">
            <Tarjeta
              empresa={{
                name: "Ies 9-024",
                descript: "odokdkkdkkdkd",
              }}
            />
          </Link>
          <Link to="/lila">
            <Tarjeta
              empresa={{
                name: "lila software studio",
                descript: "odokdkkdkkdkd",
              }}
            />
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <div id="team" className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Nuestro Equipo</h2>
              <h3 className="section-subheading text-muted">
                Conoce a los expertos detrás de AuditaWeb Solutions
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* /.team-section */}

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>AuditaWeb Solutions</h2>
          </div>
          <div className="footer-center">
            <ul className="footer-menu">
              <li>About</li>
              <li>Inicio</li>
              <li>Contacto</li>
              <li>Auditorías</li>
            </ul>
            <p>© 2024 IWDS. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <ul className="footer-socials">
              <li>
                <a href="https://www.facebook.com/sebastian.montuori.1">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://x.com/">
                  <XIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bel%C3%A9n-humbert/">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* /.footer */}
    </>
  );
}

export default Home;
