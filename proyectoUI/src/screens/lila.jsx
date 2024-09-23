import React from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate para la navegación
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
import '../Styles/Lila.css';

const Lila = () => {
  const navigate = useNavigate();  // Hook para navegar

  return (
    <>
      <Nav />
      <div className="HomeLila" id="home">
        <h2>Conocenos</h2>
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
        <h2>Sobre La Empresa</h2>

        {/* Accordion para Descripción de la Empresa */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Descripción de la Empresa</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lila Software Studio es una empresa de desarrollo de software que se especializa en la creación de productos innovadores, con un enfoque en agregar valor al mercado y proporcionar soluciones personalizadas a sus clientes. Además de desarrollar software a medida, Lila se diferencia de las típicas fábricas de software mediante su modelo de "Studio", que prioriza un trato cercano y personalizado con cada cliente. La filosofía de Lila está profundamente arraigada en la creatividad, la empatía y el humor, como herramientas para enfrentar los desafíos del mundo digital, aspirando a cambiar el mundo "jugando".
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion para Misión y Visión */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Misión y Visión</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Misión:</strong> “Ser el Merlín de cada loco”, materializar los sueños y objetivos tecnológicos de sus clientes de manera realista y efectiva, utilizando una arquitectura bien definida como el modelo MVC.
              <br /><br />
              <strong>Visión:</strong> Convertirse en una marca reconocida internacionalmente, expandiendo su presencia global y mejorando su eficiencia operativa.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion para Objetivos Generales */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Objetivos Generales</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Integración de la Inteligencia Artificial (IA) sin perder la calidad de los productos.</li>
                <li>Consolidar su presencia en la industria tecnológica local e internacional.</li>
                <li>Ser la empresa más innovadora y creativa de Mendoza.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion para el Core del Negocio */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Core del Negocio</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              El core del negocio de Lila se organiza en tres áreas clave: <strong>Bootcamp</strong>, <strong>Studio</strong> y <strong>Products</strong>.
              <ul>
                <li><strong>Bootcamp:</strong> Formación de nuevos talentos, ofreciendo proyectos sencillos para adquirir experiencia.</li>
                <li><strong>Studio:</strong> Proyectos personalizados para clientes que requieren un enfoque a medida y alto nivel de personalización.</li>
                <li><strong>Products:</strong> Desarrollo de productos propios como QRIO y Greenly Points para mejorar la competitividad en el mercado.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Sección del organigrama con las dos imágenes alineadas horizontalmente */}
      <div className="OrganigramaLila" id="organigrama">
        <h2>Organigrama</h2>
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
        <h2>Análisis</h2>

        {/* Tarjetas para los análisis */}
        <Grid container spacing={3} justifyContent="center">
          {/* Tarjeta Análisis FODA */}
          <Grid item xs={12} sm={4}>
            <Card onClick={() => navigate("/foda")} style={{ cursor: "pointer" }}>  {/* Navegar a /foda */}
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
            <Card onClick={() => navigate("/pest")} style={{ cursor: "pointer" }}>  {/* Navegar a /pest */}
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
            <Card onClick={() => navigate("/porter")} style={{ cursor: "pointer" }}>  {/* Navegar a /porter */}
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
