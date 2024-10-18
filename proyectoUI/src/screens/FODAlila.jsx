import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import styles from '../Styles/FodaLila.module.css'; 
import LilaImage from '../assets/imagenes/LILA.png';

const FODAlila = () => {
  return (
    <Container className="fodaLila-container">
      {/* Título principal */}
      <Typography 
        variant="h2" 
        className="fodaLila-title"
        gutterBottom 
        align="center"
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#c1a6cf', fontWeight: 700 }}
      >
        Análisis FODA
      </Typography>

      {/* Texto introductorio */}
      <Typography 
        variant="body1" 
        className="fodaLila-introText"
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
        El análisis FODA de Lila Software Studio revela una empresa con claras fortalezas en su enfoque personalizado y su capacidad para generar productos de alta calidad. Uno de sus principales puntos fuertes es su modelo de trabajo basado en la empatía y la creatividad, lo que permite generar soluciones innovadoras y personalizadas para cada cliente. Además, la empresa se caracteriza por su cercanía con los clientes, lo que genera relaciones comerciales a largo plazo basadas en la confianza.
      </Typography>
      <br />
      <br />

      {/* Sección FODA */}
      <Grid container spacing={4} className="fodaLila-section">
        {/* Fortalezas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaLila-paper"
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
                className="fodaLila-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#c1a6cf', fontWeight: 700, textAlign: 'center' }}
              >
                Fortalezas
              </Typography>
              <Typography 
                className="fodaLila-text"
                sx={{ textAlign: 'left' }} 
              >
                - Enfoque personalizado y soluciones innovadoras.
                <br />
                - Cercanía con los clientes, generando relaciones a largo plazo.
                <br />
                - Modelo basado en empatía y creatividad.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Debilidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaLila-paper"
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
                className="fodaLila-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#c1a6cf', fontWeight: 700, textAlign: 'center' }}
              >
                Debilidades
              </Typography>
              <Typography 
                className="fodaLila-text"
                sx={{ textAlign: 'left' }} 
              >
                - Dependencia de plataformas externas como Notion y Figma.
                <br />
                - Enfoque en contratar talento local, lo que limita la capacidad de expansión.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Oportunidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaLila-paper"
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
                className="fodaLila-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#c1a6cf', fontWeight: 700, textAlign: 'center' }}
              >
                Oportunidades
              </Typography>
              <Typography 
                className="fodaLila-text"
                sx={{ textAlign: 'left' }}
              >
                - Creciente demanda de soluciones tecnológicas innovadoras.
                <br />
                - Visión de internacionalización, lo que abre nuevas puertas para expandir el mercado más allá de Argentina.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Amenazas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaLila-paper"
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
                className="fodaLila-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#c1a6cf', fontWeight: 700, textAlign: 'center' }}
              >
                Amenazas
              </Typography>
              <Typography 
                className="fodaLila-text"
                sx={{ textAlign: 'left' }} 
              >
                - Inestabilidad económica y política en Argentina.
                <br />
                - Adopción de plataformas low-code/no-code, lo que podría reducir la demanda de software a medida.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Sección de la imagen */}
      <Box className={styles.fodaLilaImageContainer} display="flex" justifyContent="center" marginTop="50px">
      <img src={LilaImage} alt="Lila Software" className={styles.fodaLilaImage} /> 
      </Box>

    </Container>
  );
};

export default FODAlila;
