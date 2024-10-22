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
import logoInterluz from "../assets/imagenes/interluz-removebg-preview.png";
import estilos from "../Styles/Interluz.module.css";
import organigramaInterluz from "../assets/imagenes/organigramaINTERLUZ.png";
import ticInterluz from "../assets/imagenes/TICinterluz.png";
import Footer from "../components/footer.jsx";

const Interluz = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav estilo="InterluzStyle" />
      <div className={estilos.HomeInterluz} id="home">
        <h2 className={estilos.interluzTitle}>Conocenos</h2>
        <div className={estilos.logoContainer}>
          <img
            src={logoInterluz}
            alt="Logo Interluz"
            className={estilos.logoInterluz}
          />
        </div>

        <div className={estilos.frasesContainer}>
          <p className={estilos.interluzFrase}>
            Conectamos comunidades rurales con internet de alta velocidad y
            calidad.
          </p>
          <p className={estilos.interluzFrase}>
            Reducimos la brecha digital llevando fibra óptica a donde más se
            necesita.
          </p>
          <p className={estilos.interluzFrase}>
            Interluz: tu enlace confiable hacia un futuro más conectado.
          </p>
        </div>
      </div>

      <div className={estilos.AboutInterluz} id="about">
        <div className={estilos.accordionWrapper}>
          <h2 className={estilos.interluzTitle}>Sobre La Empresa</h2>

          {/* Accordion para Descripción de la Empresa */}
          <Accordion
            sx={{
              backgroundColor: "#68B649 !important",
              color: "white !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white !important" }} />}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white !important",
                }}
              >
                <strong>Descripción de la Empresa</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#ffffff !important",
                color: "#666 !important",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666 !important",
                }}
              >
                Interluz es una empresa dedicada a reducir la brecha digital en
                comunidades rurales y semiurbanas, ofreciendo soluciones de
                conectividad de alta calidad. Especializada en la instalación de
                fibra óptica, Interluz se enfoca en proporcionar acceso a
                internet confiable, rápido y accesible en áreas que
                tradicionalmente carecen de infraestructura digital. Con un
                compromiso firme hacia el desarrollo local y la inclusión
                digital, Interluz busca transformar vidas y fomentar el
                crecimiento económico mediante la conectividad, impulsando a las
                comunidades hacia un futuro más conectado y equitativo.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Misión y Visión */}
          <Accordion
            sx={{
              backgroundColor: "#68B649 !important",
              color: "white !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white !important" }} />}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white !important",
                }}
              >
                <strong>Misión y Visión</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#ffffff !important",
                color: "#666 !important",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666 !important",
                }}
              >
                Interluz aspira a ser el proveedor líder de internet de alta
                velocidad en Lavalle, enfocándose en zonas rurales y de difícil
                acceso. La empresa busca reducir la brecha digital y mejorar la
                calidad de vida al conectar comunidades con oportunidades de
                educación, trabajo y comunicación. Su misión es ofrecer
                servicios de internet fiables a comunidades desatendidas,
                facilitando el acceso a una infraestructura moderna y
                promoviendo el desarrollo local en colaboración con el
                municipio. A largo plazo, Interluz planea expandirse a otras
                regiones de Mendoza y provincias vecinas, fortaleciendo su
                impacto positivo.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Objetivos Generales */}
          <Accordion
            sx={{
              backgroundColor: "#68B649 !important",
              color: "white !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white !important" }} />}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white !important",
                }}
              >
                <strong>Objetivos Generales</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#ffffff !important",
                color: "#666 !important",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666 !important",
                }}
              >
                Corto Plazo: Expandir la infraestructura de fibra óptica para
                cubrir el 80% de las áreas rurales de Lavalle en los próximos
                dos años.<br></br>
                Mediano Plazo: Mejorar la capacidad de la red y la velocidad del
                servicio en un 50%, adaptándose al crecimiento de la demanda y
                mejorando la satisfacción del cliente.<br></br>
                Largo Plazo: Expandirse a otros departamentos de Mendoza y
                potencialmente ofrecer servicios de conectividad en provincias
                vecinas, consolidándose como un referente en conectividad para
                zonas rurales.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para el Core del Negocio */}
          <Accordion
            sx={{
              backgroundColor: "#68B649 !important",
              color: "white !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white !important" }} />}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  color: "white !important",
                }}
              >
                <strong>Core del Negocio</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#ffffff !important",
                color: "#666 !important",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#666 !important",
                }}
              >
                El core del negocio de Interluz es el despliegue y la gestión de
                una infraestructura de fibra óptica de alta capacidad en áreas
                rurales y semiurbanas. Lo que distingue a Interluz de otras
                empresas proveedoras de internet es su enfoque en la
                conectividad de fibra óptica, mientras que otros competidores de
                la región ofrecen soluciones de internet satelital que suelen
                tener limitaciones en velocidad y fiabilidad. Interluz se
                destaca por su compromiso con la calidad del servicio,
                ofreciendo una conexión más estable y veloz, adaptada a las
                necesidades actuales de sus clientes y del entorno digital.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Sección del organigrama */}
      <div className={estilos.OrganigramaInterluz} id="organigrama">
        <h2 className={estilos.interluzTitle}>Organigrama</h2>
        <div className={estilos.imgRow}>
          <div className={estilos.imgContainer}>
            <img
              src={organigramaInterluz}
              alt="Organigrama Interluz"
              className={estilos.zoomableImage}
            />
          </div>
          <div className={estilos.imgContainer}>
            <img
              src={ticInterluz}
              alt="TIC Interluz"
              className={estilos.zoomableImage}
            />
          </div>
        </div>
      </div>

      {/* Sección Análisis */}
      <div className={estilos.AnalisisInterluz} id="analisis">
        <h2 className={estilos.interluzTitle}>Análisis</h2>

        {/* Tarjetas para los análisis */}
        <Grid container spacing={3} justifyContent="center">
          {/* Tarjeta Análisis FODA */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/interluz/foda")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Análisis Foda
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Fortalezas, Oportunidades, Dificultades y Amenazas
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta Análisis PEST */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/interluz/pest")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Análisis Pest
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Factores externos Políticos, Económicos, Sociales y
                  Tecnológicos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Tarjeta Análisis 5 Fuerzas de Porter */}
          <Grid item xs={12} sm={4}>
            <Card
              onClick={() => navigate("/interluz/porter")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Análisis 5 Fuerzas de Porter
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Poder de Negociación de los Proveedores
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <Footer
        estilos="footerInterluz"
        empresas={{
          nombre: "Interluz",
          facebook:"https://www.facebook.com/profile.php?id=100045247034753&mibextid=ZbWKwL",
          instagram:"https://www.instagram.com/interluzinternetparacrecer?igsh=ajR5eDYwdjVpempt",
          web: "https://interluz.com.ar/",
          maps: "https://maps.app.goo.gl/nsSY6tVxHd12iSUeA",
        }}
      />
    </>
  );
};

export default Interluz;
