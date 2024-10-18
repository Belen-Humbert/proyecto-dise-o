import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import styles from '../Styles/FodaIes.module.css';
import FodaImage from '../assets/imagenes/FODAies.png'; // Importa la imagen correctamente

const FODAies = () => {
  return (
    <Container className="fodaIes-container" sx={{ padding: '50px 20px' }}>
      {/* Título principal */}
      <Typography 
        variant="h2" 
        className="fodaIes-title"
        gutterBottom 
        align="center"
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#0073E6', fontWeight: 700 }}  // Color azul original
      >
        Análisis FODA
      </Typography>

      {/* Texto introductorio */}
      <Typography 
        variant="body1" 
        className="fodaIes-introText"
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
El análisis FODA del Instituto de Educación Superior Nº 9-024 de Lavalle revela una institución con claras fortalezas en su vinculación con la comunidad local y su capacidad para articular propuestas educativas relevantes. Uno de sus principales puntos fuertes es su integración en el Centro de Educación e Investigación Lavalle (CEIL), lo que le permite colaborar activamente con diversas instituciones y generar soluciones formativas ajustadas a las necesidades territoriales y socio-productivas de la región.      </Typography>

      <br />
      <br />

      {/* Sección FODA con 4 cards */}
      <Grid container spacing={4} className="fodaIes-section">
        {/* Fortalezas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaIes-paper"
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
                className="fodaIes-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#0073E6', fontWeight: 700, textAlign: 'center' }}  // Título centrado
              >
                Fortalezas
              </Typography>
              <Typography className="fodaIes-text" sx={{ color: '#666', textAlign: 'left' }}>  {/* Texto alineado a la izquierda */}
                - Vinculación con la comunidad local y otras instituciones educativas.
                <br />
                - La coexistencia con otras instituciones educativas en el CEIL permite mayor articulación.
                <br />
                - Participación en actividades regionales, como la Jornada de Educación Técnica Superior.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Oportunidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaIes-paper"
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
                className="fodaIes-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#0073E6', fontWeight: 700, textAlign: 'center' }}  // Título centrado
              >
                Oportunidades
              </Typography>
              <Typography className="fodaIes-text" sx={{ color: '#666', textAlign: 'left' }}>  {/* Texto alineado a la izquierda */}
                - Articulación con entidades como la Municipalidad de Lavalle, INTA y UNCuyo.
                <br />
                - Ampliación de la oferta de formación continua para egresados mediante convenios con universidades.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Debilidades */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaIes-paper"
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
                className="fodaIes-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#0073E6', fontWeight: 700, textAlign: 'center' }}  // Título centrado
              >
                Debilidades
              </Typography>
              <Typography className="fodaIes-text" sx={{ color: '#666', textAlign: 'left' }}>  {/* Texto alineado a la izquierda */}
                - Falta de integración de la información y autonomía administrativa.
                <br />
                - Dificultades en la implementación de nuevas normativas y cambios curriculares.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Amenazas */}
        <Grid item xs={12} sm={6}>
          <Paper 
            elevation={3} 
            className="fodaIes-paper"
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
                className="fodaIes-subtitle"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', color: '#0073E6', fontWeight: 700, textAlign: 'center' }}  // Título centrado
              >
                Amenazas
              </Typography>
              <Typography className="fodaIes-text" sx={{ color: '#666', textAlign: 'left' }}>  {/* Texto alineado a la izquierda */}
                - Brecha entre propuestas curriculares y realidad socioeducativa.
                <br />
                - Resistencias dentro del equipo docente dificultando la integración de disciplinas.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Sección de la imagen */}
      <Box className={styles.fodaIesImageContainer} display="flex" justifyContent="center" marginTop="50px">
        <img src={FodaImage} alt="Ies Software" className={styles.fodaIesImage} style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Container>
  );
};

export default FODAies;
