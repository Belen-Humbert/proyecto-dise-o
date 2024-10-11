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
              >
                Fortalezas
              </Typography>
              <Typography className="FODAinterluz-text">
                - Cobertura Exclusiva de Fibra Óptica en Zonas Rurales: Interluz es la única empresa en muchas áreas rurales de Lavalle que ofrece servicios de internet mediante fibra óptica, lo cual le otorga una ventaja competitiva importante frente a competidores que solo cuentan con opciones satelitales.
                <br />
                - Calidad de Servicio y Estabilidad de Conexión: La fibra óptica permite una conexión más estable y con velocidades más altas en comparación con el internet satelital, lo que mejora la experiencia del cliente.
                <br />
                - Apoyo del Municipio: Al ser una empresa creada por el municipio, Interluz cuenta con el respaldo y la confianza de la comunidad local, lo cual facilita la penetración de mercado y la aceptación del servicio.
                <br />
                - Capacidad de Expansión: La infraestructura de fibra óptica, una vez instalada, puede ampliarse relativamente fácil para cubrir nuevas áreas, lo que le permite a Interluz crecer rápidamente dentro de su región objetivo.
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
              >
                Debilidades
              </Typography>
              <Typography className="FODAinterluz-text">
                - Dependencia de Inversiones en Infraestructura: La instalación y mantenimiento de la red de fibra óptica es costosa, lo que significa que Interluz depende de una inversión continua para mantener y expandir su infraestructura.
                <br />
                - Cobertura Limitada: Aunque Interluz tiene una ventaja en las áreas donde ofrece fibra óptica, todavía existen zonas rurales sin cobertura, lo que puede limitar el alcance de su mercado.
                <br />
                - Escasez de Recursos Técnicos Especializados: El mantenimiento y expansión de la red de fibra óptica requieren personal técnico especializado, que puede ser difícil de encontrar y retener en áreas rurales.
                <br />
                - Escala de Operaciones Reducida: En comparación con grandes empresas de telecomunicaciones, Interluz tiene recursos limitados y una operación en menor escala, lo que podría dificultar competir en mercados más amplios.
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
              >
                Oportunidades
              </Typography>
              <Typography className="FODAinterluz-text">
                - Avances Tecnológicos: La constante evolución de la tecnología de fibra óptica abre la puerta para mejorar la eficiencia y reducir los costos operativos, permitiendo que Interluz se mantenga competitivo.
                <br />
                - Aumento de la Demanda de Conectividad en Áreas Rurales: La creciente digitalización de servicios, como la educación y el trabajo remoto, aumenta la demanda de conectividad de alta calidad en áreas donde Interluz opera.
                <br />
                - Posibles Subsidios o Apoyos del Gobierno: Existen oportunidades de obtener financiamiento o subsidios del gobierno para proyectos de inclusión digital en zonas rurales, lo cual podría reducir costos y aumentar la capacidad de expansión.
                <br />
                - Expansión a Nuevos Mercados: Interluz tiene la oportunidad de expandirse a otros departamentos de Mendoza o incluso a provincias vecinas que presentan desafíos similares de conectividad.
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
              >
                Amenazas
              </Typography>
              <Typography className="FODAinterluz-text">
                - Competencia con Proveedores de Internet Satelital: Empresas como Tachicom y Micom que ofrecen internet satelital podrían expandir sus servicios o mejorar su tecnología, representando una competencia directa.
                <br />
                - Regulación Gubernamental: Cambios en la normativa que regula las telecomunicaciones y la infraestructura de internet podrían aumentar los costos operativos o imponer limitaciones al crecimiento de Interluz.
                <br />
                - Avances en Tecnología Satelital: Si la tecnología de internet satelital mejora significativamente en términos de velocidad y costo, podría convertirse en una alternativa más viable para las zonas rurales, disminuyendo la ventaja competitiva de Interluz.
                <br />
                - Dependencia de Factores Económicos: La expansión y el mantenimiento de la infraestructura requieren una inversión continua, y factores como la inflación o la devaluación podrían afectar la capacidad de la empresa para financiar estas necesidades.
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
