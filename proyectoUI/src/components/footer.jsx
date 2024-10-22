import lilaEstilo from "../Styles/PieLila.module.css";
import iesEstilo from "../Styles/PieIes.module.css";
import interluzEstilo from "../Styles/PieInterluz.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TabIcon from "@mui/icons-material/Tab";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EstiloF = {
  footerLila: lilaEstilo,
  footerIes: iesEstilo,
  footerInterluz: interluzEstilo,
};

const Footer = ({ estilos, empresas }) => {
  const estiloActual = EstiloF[estilos] || {};

  const footer = `${estiloActual.footer || ""}`;
  const footerContai = `${estiloActual.footerContainer || ""}`;
  const footerLe = `${estiloActual.footerLeft || ""} ${
    estiloActual.footerLefth2 || ""
  } ${estiloActual.footerLeftafter || ""}`;
  const footerCe = `${estiloActual.footerCenter || ""} ${
    estiloActual.footerCenterp || ""
  }`;
  const footerIc = `${estiloActual.iconContainer || ""}`; // Contenedor
  const iconStyle = `${estiloActual.icon || ""}`; // Estilo para cada icono

  return (
    <div className={footer}>
      <div className={footerContai}>
        <div className={footerLe}>
          <h2>{empresas.nombre}</h2>
        </div>
        <div className={footerCe}>
          <div className={footerIc}>
            <a href={empresas.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon className={iconStyle} />
            </a>
            <a href={empresas.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className={iconStyle} />
            </a>
            <a href={empresas.maps} target="_blank" rel="noopener noreferrer">
              <LocationOnIcon className={iconStyle} />
            </a>
            <a href={empresas.web} target="_blank" rel="noopener noreferrer">
              <TabIcon className={iconStyle} />
            </a>
          </div>
          <p>© 2024 AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
