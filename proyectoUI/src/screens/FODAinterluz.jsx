import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import styles from '../Styles/FODAinterluz.module.css'; 
import InterluzImage from '../assets/imagenes/FODAinterluz.png';

const FODAinterluz = () => {
  return (
    <Container className="FODAinterluz-container">
      {/* Título principal */}
      <Typography 
        variant="h2" 
        className="FODAinterluz-title"
        gutterBottom 
        align="center"
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#68B649', fontWeight: 700 }}
      >
        Análisis FODA
      </Typography>

      {/* Texto introductorio */}
      <Typography 
        variant="body1" 
        className="FODAinterluz-introText"
        align="center"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          color: '#666',
          fontSize: '1.2rem',
          lineHeight: 1.7,
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center',
          display: 'block'
        }}
      >
        El análisis FODA de Interluz revela fortalezas claves en su enfoque exclusivo para llevar conectividad a comunidades rurales. Su capacidad de expansión y el apoyo del municipio la posicionan estratégicamente para satisfacer las necesidades de estas áreas desatendidas.
      </Typography>
      <br />
      <br />

      {/* Sección FODA */}
      <Grid container spacing={4} className="FODAinterluz-section">
        {/* Fortalezas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="FODAinterluz-paper"
            sx={{
              transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-10px)', 
              }
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                className="FODAinterluz-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#68B649', fontWeight: 700 }}
                align="center"
              >
                Fortalezas
              </Typography>
              <Typography className="FODAinterluz-text" sx={{ textAlign: 'left' }}>
                - Cobertura Exclusiva de Fibra Óptica en Zonas Rurales.
                <br />
                - Calidad de Servicio y Estabilidad de Conexión.
                <br />
                - Apoyo del Municipio.
                <br />
                - Capacidad de Expansión.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Debilidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="FODAinterluz-paper"
            sx={{
              transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-10px)', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' 
              }
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                className="FODAinterluz-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#68B649', fontWeight: 700 }}
                align="center"
              >
                Debilidades
              </Typography>
              <Typography className="FODAinterluz-text" sx={{ textAlign: 'left' }}>
                - Dependencia de Inversiones en Infraestructura.
                <br />
                - Cobertura Limitada.
                <br />
                - Escasez de Recursos Técnicos Especializados.
                <br />
                - Escala de Operaciones Reducida.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Oportunidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="FODAinterluz-paper"
            sx={{
              transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-10px)', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' 
              }
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                className="FODAinterluz-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#68B649', fontWeight: 700 }}
                align="center"
              >
                Oportunidades
              </Typography>
              <Typography className="FODAinterluz-text" sx={{ textAlign: 'left' }}>
                - Avances Tecnológicos
                <br />
                - Aumento de la Demanda de Conectividad en Áreas Rurales.
                <br />
                - Posibles Subsidios o Apoyos del Gobierno.
                <br />
                - Expansión a Nuevos Mercados.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Amenazas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="FODAinterluz-paper"
            sx={{
              transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'translateY(-10px)', 
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' 
              }
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                className="FODAinterluz-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#68B649', fontWeight: 700 }}
                align="center"
              >
                Amenazas
              </Typography>
              <Typography className="FODAinterluz-text" sx={{ textAlign: 'left' }}>
                - Competencia con Proveedores de Internet Satelital.
                <br />
                - Regulación Gubernamental.
                <br />
                - Avances en Tecnología Satelital.
                <br />
                - Dependencia de Factores Económicos.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Sección de la imagen */}
      <Box className={styles.FODAinterluzImageContainer} display="flex" justifyContent="center" marginTop="50px">
        <img src={InterluzImage} alt="Interluz" className={styles.FODAinterluzImage} /> 
      </Box>

    </Container>
  );
};

export default FODAinterluz;
