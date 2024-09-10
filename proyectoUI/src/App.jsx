import "./Styles/App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tarjeta from "./components/card";

function App() {
  return (
    <>
      {/* Update 29.9.2015: <head></head> and <body></body> tags are included in this pen for quick copy/paste in case you to try this challenge offline */}
      <title>Infinito Web Design Studio</title>
      {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
      {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
      {/*[if lt IE 9]>
  
  
    <![endif]*/}
      {/* Navigation */}

      {/* Header */}
      <a name="home" />
      <div className="intro-header">
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
      <a name="about" />
      <div className="content-section-a">
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
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Audirotias Realizadas</h2>
              <h3 id="below-section" className="section-subheading text-muted">
                Ultimas auditorias realizadas
              </h3>
            </div>
          </div>
        </div>
        <Tarjeta/><br />
        <Tarjeta/><br />
        <Tarjeta/>
      </section>
      <a name="contact" />
      <div className="banner">
        <div className="bg-overlay4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="connect">
                  Check out some of my latest work at{" "}
                  <a
                    className="link-footer"
                    target="_blank"
                    href="https://www.facebook.com/Virtual-Dawn-802163799892155/"
                  >
                    Virtual-Dawn's Facebook page.
                  </a>
                </h2>
              </div>
              <br />
              <div className="col-lg-6">
                <ul className="list-inline banner-social-buttons">
                  <li>
                    <a
                      href="https://twitter.com/Ferreir4Thiago"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-twitter fa-fw" />{" "}
                      <span className="network-name">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ThiagoFerreir4"
                      target="_blank"
                      className="btn btn-default btn-lg "
                    >
                      <i className="fa fa-github fa-fw" />{" "}
                      <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/thiagoferreir4"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-linkedin fa-fw" />{" "}
                      <span className="network-name">Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.com/thiagoferreira"
                      target="_blank"
                      className="btn btn-default btn-lg"
                    >
                      <i className="fa fa-free-code-camp fa-fw" />{" "}
                      <span className="network-name">freeCodeCamp</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.container */}
          </div>
        </div>
      </div>
      {/* /.banner */}
      {/* Footer */}
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>AuditaWeb Solutions</h2>
        </div>
        <div className="footer-center">
          <ul className="footer-menu">
            <li>About</li>
            <li>Inicio</li>
            <li>
              <details>
              <summary>Contacto</summary>
              <li>261360238</li>
              <li>233231312</li>
              <li>alwwksmxskxS</li>
              </details>
            </li>
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
    </>
  );
}

export default App;
