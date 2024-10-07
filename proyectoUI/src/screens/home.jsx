import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tarjeta from "../components/tarjeta";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css"; // Importamos el módulo CSS
import logoIes from "../assets/imagenes/logoies.jpeg"
import logoLila from "../assets/imagenes/logoLila.png"

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <title>AuditaWeb Solutions</title>

        {/* Navigation */}
        <nav className={styles.navbar}>
          <ul className={styles.navbarMenu}>
            <li className={`${styles.navbarItem} ${styles.active}`}>
              <Link to="/home" className={styles.navbarLink}>
                Home 
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/products" className={styles.navbarLink}>
                Products
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/blog" className={styles.navbarLink}>
                Blog
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/about" className={styles.navbarLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        {/* Header */}
        <div id="home">
          <div className={styles.bgOverlay}>
            <div>
              <div className={styles.row}>
                <div className={styles.introMessage}>
                  <h1>AuditaWeb Solutions</h1>
                  <h3>Potenciamos tu negocio, aseguramos tu futuro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div id="about" className={styles.contentSectionA}>
          <div>
            <div>
              <h2 className={styles.sectionHeading}>Sobre Nosotros</h2>
              <br />
              <p className={styles.lead}>
                En AuditaWeb Solutions, somos especialistas en brindar
                soluciones integrales a empresas que buscan optimizar su
                funcionamiento y expandir su presencia en el mundo digital.
                Ofrecemos servicios de auditoría externa para garantizar la
                eficiencia y el cumplimiento de las normativas en todos los
                procesos de tu organización. Además, diseñamos y desarrollamos
                páginas web personalizadas que reflejan la identidad de tu marca
                y te conectan con tus clientes de manera efectiva. Con nuestro
                enfoque multidisciplinario, ayudamos a las empresas a crecer de
                manera segura y confiable, asegurando su éxito en el mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid Section */}
        <section className={styles.contentSectionA}> 
         
          <div>
            <h2 className={styles.sectionHeading}>Auditorías Realizadas</h2>
          </div>
          <div className={styles.cardAlign}>
            <Link to="/lila">
              <Tarjeta
                empresa={{
                  name: "lila software studio",
                  descript: "odokdkkdkkdkd",
                  imagen: logoLila,
                }}
              />
            </Link>
            <Link to="/ies">
              <Tarjeta
                empresa={{
                  name: "Instituto de Educación Superior N°9-024 de Lavalle",
                  descript: "ies",
                  imagen: logoIes,
                }}
              />
            </Link>
            <Link to="/lila">
              <Tarjeta
                empresa={{
                  name: "lila software studio",
                  descript: "odokdkkdkkdkd",
                  imagen: logoLila,
                }}
              />
            </Link>
          </div>
        </section>

        {/* Team Section */}
        <div id="team" className={styles.contentSectionA}>
          <div>
            <h2 className={styles.sectionHeading}>Nuestro Equipo</h2>
            <h3 className={styles.sectionSubheading}>
              Conoce a los expertos detrás de AuditaWeb Solutions
            </h3>
          </div>
        </div>

        {/* Footer */}
        <footer id="footer" className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
              <h2>AuditaWeb Solutions</h2>
            </div>
            <div className={styles.footerCenter}>
              <ul className={styles.footerMenu}>
                <li>About</li>
                <li>Inicio</li>
                <li>Contacto</li>
                <li>Auditorías</li>
              </ul>
              <p>© 2024 AWS. All rights reserved.</p>
            </div>
            <div className={styles.footerRight}>
              <ul className={styles.footerSocials}>
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
      </div>
    </>
  );
}

export default Home;
