import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PESTies.module.css';
import PESTImage from '../assets/imagenes/PESTies.png';

const PESTies = () => {
  return (
    <>
      <div className={styles.pestiesContainer}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            color: '#0073E6',
            fontSize: '3rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          Análisis PEST
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.2rem',
            color: '#666',
            lineHeight: 1.7,
            maxWidth: '900px',
            margin: '0 auto 50px auto',
            textAlign: 'center'
          }}
        >
          El análisis PEST es una herramienta esencial para comprender el entorno en el que opera el Instituto de Educación Superior. 
          Este enfoque permite identificar y evaluar factores Políticos, Económicos, Sociales y Tecnológicos que pueden impactar 
          en la gestión y desarrollo institucional, ayudando a la toma de decisiones estratégicas y a la adaptación a cambios 
          en el contexto educativo.
        </Typography>

        <div className={styles.accordionWrapper}>
          {/* Estructura Política */}
          <Accordion
            sx={{
              marginBottom: '20px',
              borderRadius: '8px',
              backgroundColor: '#0073E6',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: '#0073E6',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                Estructura Política
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  color: '#666',
                  lineHeight: 1.7
                }}
              >
                La institución depende de políticas públicas de educación, tanto a nivel provincial como nacional. 
                Cambios en el financiamiento o en la legislación educativa pueden afectar su operación, como modificaciones en 
                la normativa de educación superior (ej. Decreto 530/18). La relación con el gobierno provincial y municipal 
                es crucial, especialmente en la articulación de acciones con la Dirección General de Escuelas y el municipio de 
                Lavalle. Cambios en la administración gubernamental pueden influir en el presupuesto destinado a la educación, 
                lo que puede repercutir en la estabilidad financiera del IES.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Estructura Económica */}
          <Accordion
            sx={{
              marginBottom: '20px',
              borderRadius: '8px',
              backgroundColor: '#0073E6',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: '#0073E6',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                Estructura Económica
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  color: '#666',
                  lineHeight: 1.7
                }}
              >
                El IES Nº 9-024 depende de financiamiento estatal para su funcionamiento, lo que lo hace vulnerable a ajustes 
                presupuestarios y cambios económicos en la provincia. Los ingresos adicionales provenientes de las cuotas de 
                inscripción, cooperadora y cursos externos diversifican su fuente de financiamiento, pero pueden verse 
                afectados por la situación económica de las familias y estudiantes. Las crisis económicas pueden reducir la 
                capacidad de pago de los estudiantes y afectar la demanda de formación profesional, lo que podría impactar en 
                los ingresos por cursos externos.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Estructura Social */}
          <Accordion
            sx={{
              marginBottom: '20px',
              borderRadius: '8px',
              backgroundColor: '#0073E6',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: '#0073E6',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                Estructura Social
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  color: '#666',
                  lineHeight: 1.7
                }}
              >
                La institución juega un papel fundamental en la comunidad de Lavalle, ofreciendo formación adaptada a las 
                necesidades locales, lo que fortalece su vínculo con la comunidad. Las expectativas sociales sobre la formación 
                docente y técnica influyen en la demanda de las carreras ofrecidas. La valoración de la educación como una vía 
                para mejorar el acceso al mercado laboral es un incentivo para la matrícula. La población estudiantil puede 
                verse afectada por fenómenos sociales como la deserción y el abandono, impulsados por factores como la 
                necesidad de trabajar o la falta de recursos para continuar los estudios.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Estructura Tecnológica */}
          <Accordion
            sx={{
              marginBottom: '20px',
              borderRadius: '8px',
              backgroundColor: '#0073E6',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              sx={{
                backgroundColor: '#0073E6',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                Estructura Tecnológica
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  color: '#666',
                  lineHeight: 1.7
                }}
              >
                La incorporación de tecnologías en la enseñanza y la gestión educativa es clave para mantener la competitividad 
                y la calidad de la educación ofrecida. El desarrollo de cursos online y la mejora de la infraestructura 
                tecnológica son necesarios para atender a una mayor diversidad de estudiantes y facilitar la continuidad 
                educativa, especialmente en áreas rurales. Las alianzas con otras instituciones y la formación continua a 
                través de la tecnología pueden ser un factor diferenciador para atraer a estudiantes que buscan educación 
                flexible y de calidad.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className={styles.pestiesImageContainer}>
        <img src={PESTImage} alt="PEST Lila" className={styles.pestiesImage} />
      </div>
    </>
  );
};

export default PESTies;
