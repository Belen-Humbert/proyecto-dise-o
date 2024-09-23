import React from 'react';
import '../Styles/FodaLila.css'; // Asegúrate de importar los estilos
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

const FODAlila = () => {
  return (
    <Container className="FodaLila">
      <Typography variant="h2" gutterBottom align="center">
        Análisis FODA
      </Typography>

      <Typography variant="body1" paragraph align="center">
        El análisis FODA de Lila Software Studio revela una empresa con claras fortalezas en su enfoque personalizado y su capacidad para generar productos de alta calidad. Uno de sus principales puntos fuertes es su modelo de trabajo basado en la empatía y la creatividad, lo que permite generar soluciones innovadoras y personalizadas para cada cliente. Además, la empresa se caracteriza por su cercanía con los clientes, lo que genera relaciones comerciales a largo plazo basadas en la confianza.
      </Typography>

      <Grid container spacing={4} className="FodaLila-section">
        {/* Sección Fortalezas */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box>
              <Typography variant="h4" className="FodaLila-subtitle" gutterBottom>
                Fortalezas
              </Typography>
              <Typography variant="body1" className="FodaLila-text">
                - Enfoque personalizado y soluciones innovadoras.
                <br />
                - Cercanía con los clientes, generando relaciones a largo plazo.
                <br />
                - Modelo basado en empatía y creatividad.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Sección Debilidades */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box>
              <Typography variant="h4" className="FodaLila-subtitle" gutterBottom>
                Debilidades
              </Typography>
              <Typography variant="body1" className="FodaLila-text">
                - Dependencia de plataformas externas como Notion y Figma.
                <br />
                - Enfoque en contratar talento local, lo que limita la capacidad de expansión.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Sección Oportunidades */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box>
              <Typography variant="h4" className="FodaLila-subtitle" gutterBottom>
                Oportunidades
              </Typography>
              <Typography variant="body1" className="FodaLila-text">
                - Creciente demanda de soluciones tecnológicas innovadoras.
                <br />
                - Visión de internacionalización, lo que abre nuevas puertas para expandir el mercado más allá de Argentina.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Sección Amenazas */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box>
              <Typography variant="h4" className="FodaLila-subtitle" gutterBottom>
                Amenazas
              </Typography>
              <Typography variant="body1" className="FodaLila-text">
                - Inestabilidad económica y política en Argentina.
                <br />
                - Adopción de plataformas low-code/no-code, lo que podría reducir la demanda de software a medida.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FODAlila;
