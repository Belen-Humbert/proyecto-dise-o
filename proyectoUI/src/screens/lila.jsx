import React from "react";
import { useNavigate } from "react-router-dom";  
import Nav from "../components/nav.jsx";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import organigramaLila from '../assets/imagenes/organigramaLila.png';
import techLila from '../assets/imagenes/techLila.png';
import logoLila from '../assets/imagenes/logoLila.png';
import '../Styles/Lila.module.css';

const Lila = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Nav />
      <div className="HomeLila" id="home">
        <h2 className="lila-title">Conocenos</h2>
        <div className="logo-container">
          <img src={logoLila} alt="Logo Lila" className="logo-lila" />
        </div>

        <div className="frases-container">
          <p className="frase">Enamorados de construir aplicaciones para el futuro de tu negocio</p>
          <p className="frase">Obsesionados con diseñar experiencias únicas para nuestros clientes</p>
          <p className="frase">Emocionados de crear productos para alcanzar tus objetivos</p>
        </div>
      </div>

      <div className="AboutLila" id="about">
        <div className="accordion-wrapper">
          <h2 className="lila-title">Sobre La Empresa</h2>

          {/* Accordion para Descripción de la Empresa */}
          <Accordion className="lila-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
              >
                <strong>Descripción de la Empresa</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                Lila Software Studio es una empresa de desarrollo de software que se especializa en la creación de productos innovadores, con un enfoque en agregar valor al mercado y proporcionar soluciones personalizadas a sus clientes. Además de desarrollar software a medida, Lila se diferencia de las típicas fábricas de software mediante su modelo de "Studio", que prioriza un trato cercano y personalizado con cada cliente. La filosofía de Lila está profundamente arraigada en la creatividad, la empatía y el humor, como herramientas para enfrentar los desafíos del mundo digital, aspirando a cambiar el mundo "jugando". Esta visión filosófica del juego, reflejada en la palabra "Lilah", antigua palabra sánscrita que significa el juego divino, se refleja en todas las actividades de la empresa.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Misión y Visión */}
          <Accordion className="lila-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
              >
                <strong>Misión y Visión</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                La misión de Lila es “Ser el Merlín de cada loco”, es decir, materializar los sueños y objetivos tecnológicos de sus clientes de manera realista y efectiva, utilizando una arquitectura bien definida, como el modelo MVC. Su visión a largo plazo es convertirse en una marca reconocida internacionalmente, expandiendo su presencia global y mejorando su eficiencia operativa.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Objetivos Generales */}
          <Accordion className="lila-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
              >
                <strong>Objetivos Generales</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                Los objetivos generales de Lila incluyen la integración de la Inteligencia Artificial (IA) en sus procesos, sin perder la calidad de los productos, y la consolidación de su presencia en la industria tecnológica local e internacional. Lila también se ha comprometido a ser la empresa más innovadora y creativa de Mendoza, manteniéndose a la vanguardia en el desarrollo de soluciones tecnológicas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para el Core del Negocio */}
          <Accordion className="lila-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
              >
                <strong>Core del Negocio</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                El core del negocio de Lila se organiza en tres áreas clave: Bootcamp, Studio y Products, cada una con un propósito bien definido. El Bootcamp se centra en formar a nuevos talentos, ofreciendo proyectos más sencillos para que los desarrolladores novatos adquieran experiencia y habilidades dentro de la empresa. En el Studio, Lila enfrenta los proyectos más complejos, creando soluciones personalizadas para clientes que requieren un enfoque a medida y un alto nivel de personalización. Finalmente, en la unidad de Products, Lila desarrolla productos propios como QRIO y Greenly Points, que le permiten expandirse y mejorar su competitividad en el mercado.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Sección del organigrama con las dos imágenes alineadas horizontalmente */}
      <div className="OrganigramaLila" id="organigrama">
        <h2 className="lila-title">Organigrama</h2>
        <div className="img-row">
          <div className="img-container">
            <img src={organigramaLila} alt="Organigrama" className="zoomable-image" />
          </div>
          <div className="img-container">
            <img src={techLila} alt="Tech Lila" className="zoomable-image" />
          </div>
        </div>
      </div>

                {/* Sección Análisis */}
<div className="AnalisisLila" id="analisis">
  <h2 className="lila-title">Análisis</h2>

  {/* Tarjetas para los análisis */}
  <Grid container spacing={3} justifyContent="center">
    {/* Tarjeta Análisis FODA */}
    <Grid item xs={12} sm={4}>
      <Card 
        onClick={() => navigate("/fodaLila")} 
        sx={{ 
          cursor: "pointer", 
          transition: "transform 0.3s ease-in-out", 
          "&:hover": { transform: "scale(1.05)" } 
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
        onClick={() => navigate("/pest")} 
        sx={{ 
          cursor: "pointer", 
          transition: "transform 0.3s ease-in-out", 
          "&:hover": { transform: "scale(1.05)" } 
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Análisis Pest
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Factores externos Políticos, Económicos, Sociales y Tecnológicos.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    {/* Tarjeta Análisis 5 Fuerzas de Porter */}
    <Grid item xs={12} sm={4}>
      <Card 
        onClick={() => navigate("/porter")} 
        sx={{ 
          cursor: "pointer", 
          transition: "transform 0.3s ease-in-out", 
          "&:hover": { transform: "scale(1.05)" } 
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
    </>
  );
};

export default Lila;
