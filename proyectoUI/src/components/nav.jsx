import estiloLila from "../Styles/NavLila.module.css";
import estiloIes from "../Styles/NavIes.module.css";
import estiloInterluz from "../Styles/NavInterluz.module.css";
import { Link } from "react-router-dom";


const Styles = {
  lilaStyle: estiloLila,
  InterluzStyle: estiloInterluz,
  IesStyle: estiloIes,
};

const Nav = ({estilo}) => {

  //Selecciona el objeto de estilos correspondiente al 'estilo' proporcionado, o un objeto vacío si no se encuentra.
  const vistaActual = Styles[estilo] || {};

   // Combina los estilos base con los estilos específicos de la vista
   const navClass = `${vistaActual.navAll || ''}`;
   const navMenu = `${vistaActual.navbarMenu || ''}`;
   const navItem = `${vistaActual.navbarItem || ''}`; //El resultado de esa evaluación se convierte a string y se inserta en la posición correspondiente dentro de la cadena.
   const navLink = `${vistaActual.navbarLink || ''}  ${vistaActual.navbarLinkhover || ''}`;
/*    const navLinkH = `${vistaActual.navbarLinkhover || ''}`; */

  return (
    <nav className={navClass}>
      <ul className={navMenu}>
        <li className={navItem}>
        <Link to="/" className={navLink}>Inicio</Link>
        </li>
        <li className={navItem}>
          <a href="#about" className={navLink}>Sobre La Empresa</a>
        </li>
        <li className={navItem}>
          <a href="#organigrama"className={navLink}>Organigrama</a>
        </li>
        <li className={navItem}>
          <a href="#analisis"className={navLink}>Análisis</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
