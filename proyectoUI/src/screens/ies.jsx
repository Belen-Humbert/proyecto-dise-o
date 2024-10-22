import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import organigramaIes from "../assets/imagenes/ORGANIGRAMAies.png";
import TICies from "../assets/imagenes/TICies.png";
import logoIes from "../assets/imagenes/logoIes-removebg-preview.png";
import "../Styles/ies.css";
import Footer from "../components/footer.jsx"

const carreras = [
  {
    nombre: "Profesorado de Educación Secundaria en Lengua y Literatura",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-en-lengua-y-literatura/", // Reemplaza con la URL real
  },
  {
    nombre: "Profesorado de Educación Secundaria en Matemática",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-en-matematica/", // Reemplaza con la URL real
  },
  {
    nombre:
      "Profesorado de Educación Especial con Orientación en Discapacidad Intelectual",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-especial-con-orientacion-en-discapacidad-intelectual/", // Reemplaza con la URL real
  },
  {
    nombre:
      "Profesorado de Educación Secundaria Técnica en Incumbencia con el Título de Base",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-de-la-modalidad-tecnico-profesional-en-concurrencia-con-el-titulo-de-base/profesorado-de-educacion-secundaria-tecnica-en-incumbencia-con-el-titulo-de-base/", // Reemplaza con la URL real
  },
  {
    nombre: "Tecnicatura Superior en Comunicación Social",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-comunicacion-social-con-orientacion-al-desarrollo-regional-y-local/", // Reemplaza con la URL real
  },
  {
    nombre: "Tecnicatura Superior en Turismo y Hotelería",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-turismo-y-hoteleria/", // Reemplaza con la URL real
  },
  {
    nombre: "Tecnicatura Superior en Enología e Industrias de los Alimentos",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-frutihorticolas/", // Reemplaza con la URL real
  },
  {
    nombre: "Tecnicatura Superior en Administración de Empresas",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-administracion-de-empresas/", // Reemplaza con la URL real
  },
  {
    nombre: "Tecnicatura Superior en Desarrollo de Software",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-analisis-y-programacion-de-sistemas/", // Reemplaza con la URL real
  },
  {
    nombre:
      "Tecnicatura Superior en Higiene y Seguridad con Orientación en Calidad y Medio Ambiente",
    url: "https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-higiene-y-seguridad-con-orientacion-en-calidad-y-medio-ambiente/", // Reemplaza con la URL real
  },
];

const Ies = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav estilo="IesStyle" />
      <div className="HomeIes" id="home">
        <h2 className="ies-title h2-ies">Conócenos</h2>
        <div className="logo-container">
          <img src={logoIes} alt="Logo Ies" className="logo-ies" />
        </div>

        <div className="frases-container">
          <p className="frase p-ies">Profesorados</p>
          <p className="frase p-ies">Tecnicaturas</p>
          <p className="frase p-ies">Especializaciones</p>
        </div>
      </div>

      {/* Sección de carreras mostradas en Cards */}
      <div className="carreras-section" id="carreras">
        <h2 className="ies-title h2-ies">Carreras Disponibles</h2>
        <Grid container spacing={2} justifyContent="center">
          {carreras.map((carrera, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{ minHeight: 120 }}
                onClick={() => (window.location.href = carrera.url)}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ fontWeight: "bold", fontSize: "0.95rem" }}
                  >
                    {carrera.nombre} {/* Cambiado a carrera.nombre */}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Sección del acordeón */}
      <div className="AboutIes" id="about">
        <div className="accordion-wrapper">
          <h2 className="ies-title h2-ies">IES 9-024 Lavalle</h2>

          {/* Accordion para Descripción de la Empresa */}
          <Accordion
            className="ies-accordion"
            sx={{
              backgroundColor: "#0073E6 !important",
              "& .MuiAccordionSummary-root": {
                backgroundColor: "#0073E6 !important",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white",
                }}
                className="h5-ies"
              >
                <strong>Descripción de la Institución</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666",
                }}
                className="p-ies"
              >
                El Instituto de Educación Superior Nº 9-024 Lavalle (IES Nº
                9-024) es una institución pública en Mendoza, Argentina,
                dedicada a la formación docente y técnica. Fundada en 2009, su
                oferta educativa incluye profesorados y tecnicaturas, con un
                fuerte enfoque en la integración de sus estudiantes a la
                realidad local y regional mediante prácticas profesionales y
                proyectos de extensión. Su misión es brindar una formación
                accesible y de calidad, adaptada a las necesidades del contexto
                socioproductivo de Lavalle. El IES Nº 9-024 se destaca por su
                vinculación con la comunidad y su compromiso con el desarrollo
                educativo y social del departamento.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Misión y Visión */}
          <Accordion
            className="ies-accordion"
            sx={{
              backgroundColor: "#0073E6 !important",
              "& .MuiAccordionSummary-root": {
                backgroundColor: "#0073E6 !important",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white",
                }}
                className="h5-ies"
              >
                <strong>Misión y Visión</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666",
                }}
                className="p-ies"
              >
                La visión del instituto es ser una referencia en formación
                docente y técnica en Lavalle, destacándose por su compromiso con
                la comunidad, la innovación educativa y la integración de sus
                estudiantes al entorno socio-productivo para contribuir al
                desarrollo regional. Su misión es formar profesionales
                competentes y comprometidos con el crecimiento educativo y
                socioeconómico local, ofreciendo una educación de calidad
                accesible, que combine teoría y práctica, y promueva la
                investigación y la extensión para responder a las necesidades
                del territorio.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Objetivos Generales */}
          <Accordion
            className="ies-accordion"
            sx={{
              backgroundColor: "#0073E6 !important",
              "& .MuiAccordionSummary-root": {
                backgroundColor: "#0073E6 !important",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white",
                }}
                className="h5-ies"
              >
                <strong>Objetivos Generales</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666",
                }}
                className="p-ies"
              >
                Los objetivos generales del instituto se centran en brindar
                formación académica de calidad en carreras docentes y técnicas,
                atendiendo a las demandas del sistema educativo y el mercado
                laboral regional. Promueve la integración de los estudiantes a
                la comunidad mediante prácticas profesionales, proyectos de
                investigación y extensión, fomentando competencias sociales,
                técnicas y pedagógicas. Además, busca fortalecer la vinculación
                con organizaciones locales para potenciar su impacto social, y
                consolidar una gestión participativa e inclusiva, asegurando la
                participación de todos los actores en la toma de decisiones y el
                diseño de propuestas educativas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para el Core del Negocio */}
          <Accordion
            className="ies-accordion"
            sx={{
              backgroundColor: "#0073E6 !important",
              "& .MuiAccordionSummary-root": {
                backgroundColor: "#0073E6 !important",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white",
                }}
                className="h5-ies"
              >
                <strong>Core del Negocio</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666",
                }}
                className="p-ies"
              >
                El core del IES Nº 9-024 se centra en la formación de docentes y
                técnicos capacitados para enfrentar los desafíos del contexto
                educativo y productivo local. Esto implica no solo la enseñanza
                de conocimientos teóricos, sino la creación de experiencias de
                aprendizaje prácticas y contextuales que preparen a los
                estudiantes para intervenir en su comunidad, integrando la
                investigación y el desarrollo de capacidades que respondan a las
                necesidades del departamento de Lavalle y sus alrededores.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="OrganigramaIes" id="organigrama">
        <h2 className="iesTitle">Organigrama</h2>
        <div className="imgRow">
          <div className="imgContainer">
            <img
              src={organigramaIes}
              alt="Organigrama Ies"
              className="zoomableImage"
            />
          </div>
          <div className="imgContainer">
            <img src={TICies} alt="Tech Ies" className="zoomableImage" />
          </div>
        </div>
      </div>

      {/* Sección Análisis */}
      <div className="AnalisisIes" id="analisis">
        <h2 className="ies-title h2-ies">Más información Institucional</h2>

        {/* Tarjetas para los análisis */}
        <Grid container spacing={3} justifyContent="center">
          {/* Tarjeta Análisis FODA */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/ies/foda")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis Foda
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="p-ies"
                >
                  Fortalezas, Oportunidades, Dificultades y Amenazas
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta Análisis PEST */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/ies/pest")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis Pest
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="p-ies"
                >
                  Factores externos Políticos, Económicos, Sociales y
                  Tecnológicos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta Análisis 5 Fuerzas de Porter */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/ies/porter")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis 5 Fuerzas de Porter
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="p-ies"
                >
                  Poder de Negociación de los Proveedores
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

       <Footer estilos="footerIes" empresas={{nombre: "IES 9-024 Lavalle", 
         }}/>       

    </>
  );
};

export default Ies;
