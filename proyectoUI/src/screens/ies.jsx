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
import organigramaIes from '../assets/imagenes/ORGANIGRAMAies.png';
import TICies from '../assets/imagenes/TICies.png';
import logoIes from '../assets/imagenes/logoIes-removebg-preview.png';
import '../Styles/ies.css';

const carreras = [
  {
    nombre: 'Profesorado de Educación Secundaria en Lengua y Literatura',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-en-lengua-y-literatura/', // Reemplaza con la URL real
  },
  {
    nombre: 'Profesorado de Educación Secundaria en Matemática',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-en-matematica/', // Reemplaza con la URL real
  },
  {
    nombre: 'Profesorado de Educación Especial con Orientación en Discapacidad Intelectual',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-especial-con-orientacion-en-discapacidad-intelectual/', // Reemplaza con la URL real
  },
  {
    nombre: 'Profesorado de Educación Secundaria Técnica en Incumbencia con el Título de Base',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/profesorado-de-educacion-secundaria-de-la-modalidad-tecnico-profesional-en-concurrencia-con-el-titulo-de-base/profesorado-de-educacion-secundaria-tecnica-en-incumbencia-con-el-titulo-de-base/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Comunicación Social',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-comunicacion-social-con-orientacion-al-desarrollo-regional-y-local/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Turismo y Hotelería',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-turismo-y-hoteleria/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Enología e Industrias de los Alimentos',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-frutihorticolas/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Administración de Empresas',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-administracion-de-empresas/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Desarrollo de Software',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-analisis-y-programacion-de-sistemas/', // Reemplaza con la URL real
  },
  {
    nombre: 'Tecnicatura Superior en Higiene y Seguridad con Orientación en Calidad y Medio Ambiente',
    url: 'https://ies9024-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-higiene-y-seguridad-con-orientacion-en-calidad-y-medio-ambiente/', // Reemplaza con la URL real
  },
];

const Ies = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Nav />
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
      <Card sx={{ minHeight: 120 }} onClick={() => window.location.href = carrera.url}>
        <CardContent>
          <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
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
              backgroundColor: '#0073E6 !important',  
              '& .MuiAccordionSummary-root': {
                backgroundColor: '#0073E6 !important',  
              }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
                className="h5-ies"
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
                className="p-ies"
              >
                Ies Software Studio es una empresa de desarrollo de software que se especializa en la creación de productos innovadores, con un enfoque en agregar valor al mercado y proporcionar soluciones personalizadas a sus clientes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Misión y Visión */}
          <Accordion 
            className="ies-accordion" 
            sx={{ 
              backgroundColor: '#0073E6 !important',  
              '& .MuiAccordionSummary-root': {
                backgroundColor: '#0073E6 !important',  
              }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
                className="h5-ies"
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
                className="p-ies"
              >
                La misión de Ies es "Ser el Merlín de cada loco".
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para Objetivos Generales */}
          <Accordion 
            className="ies-accordion" 
            sx={{ 
              backgroundColor: '#0073E6 !important',  
              '& .MuiAccordionSummary-root': {
                backgroundColor: '#0073E6 !important',  
              }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
                className="h5-ies"
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
                className="p-ies"
              >
                Los objetivos generales de Ies incluyen la integración de la IA en sus procesos.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion para el Core del Negocio */}
          <Accordion 
            className="ies-accordion" 
            sx={{ 
              backgroundColor: '#0073E6 !important',  
              '& .MuiAccordionSummary-root': {
                backgroundColor: '#0073E6 !important',  
              }
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 700, 
                  color: 'white' 
                }}
                className="h5-ies"
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
                className="p-ies"
              >
                El core del negocio de Ies se organiza en tres áreas clave: Bootcamp, Studio y Products.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>


  <div className="OrganigramaIes" id="organigramaIes">
  <h2 className="iesTitle">Organigrama</h2>
  <div className="imgRow">
    <div className="imgContainer">
      <img src={organigramaIes} alt="Organigrama Ies" className="zoomableImage" />
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
                "&:hover": { transform: "scale(1.05)" } 
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis Foda
                </Typography>
                <Typography variant="body2" color="textSecondary" className="p-ies">
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
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis Pest
                </Typography>
                <Typography variant="body2" color="textSecondary" className="p-ies">
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
                <Typography variant="h5" component="div" className="h5-ies">
                  Análisis 5 Fuerzas de Porter
                </Typography>
                <Typography variant="body2" color="textSecondary" className="p-ies">
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

export default Ies;
