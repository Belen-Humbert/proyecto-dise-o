import "../Styles/FooterS.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Pie() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Infinito Web Design Studio</h2>
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
  );
}

export default Pie;
