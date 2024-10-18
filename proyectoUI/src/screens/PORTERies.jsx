import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PORTERies.module.css'; // Con CSS Modules
import porterImage from '../assets/imagenes/PORTERies.png';

const PORTERlila = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{
      padding: '60px 20px',
      backgroundColor: '#f4f4f4',
      textAlign: 'center',
    }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Poppins, sans-serif !important',
          fontWeight: 700,
          color: '#0073E6 !important',  // Color del título
          fontSize: '3rem !important',
          marginBottom: '40px !important',
          textAlign: 'center !important',
        }}
      >
        Análisis 5 Fuerzas de Porter
      </Typography>

      {/* Párrafo centrado debajo del título */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: '1.2rem !important',
          color: '#666 !important',
          maxWidth: '700px !important',
          margin: '0 auto 40px auto !important',
          textAlign: 'center !important',
          lineHeight: '1.7 !important',
        }}
      >
        Este análisis evalúa la competencia y la posición del IES Nº 9-024 en el sector de la educación superior
      </Typography>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Acordeón: Poder de Negociación de los Proveedores */}
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{
            marginBottom: '20px !important',
            borderRadius: '8px !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel1' ? '#0073E6 !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Color del encabezado
              }}
            >
              Poder de Negociación de los Proveedores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#666 !important',
              maxWidth: '700px !important',
              margin: '0 auto !important',
              padding: '20px !important',
              textAlign: 'left !important',
              lineHeight: '1.7 !important',
              fontFamily: 'Poppins, sans-serif !important',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontSize: '1.2rem !important',
                color: '#666 !important',
                lineHeight: '1.7 !important',
              }}
            >
              La dependencia del financiamiento estatal y los cambios en la normativa educativa otorgan al gobierno un poder significativo sobre la operación y estabilidad del instituto.

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Acordeón: Poder de Negociación de los Clientes */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{
            marginBottom: '20px !important',
            borderRadius: '8px !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel2' ? '#0073E6 !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Color del encabezado
              }}
            >
              Poder de Negociación con los Estudiantes
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#666 !important',
              maxWidth: '700px !important',
              margin: '0 auto !important',
              padding: '20px !important',
              textAlign: 'left !important',
              lineHeight: '1.7 !important',
              fontFamily: 'Poppins, sans-serif !important',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontSize: '1.2rem !important',
                color: '#666 !important',
                lineHeight: '1.7 !important',
              }}
            >
              Los estudiantes y sus familias tienen un alto poder de negociación, ya que la capacidad de pago de las cuotas de inscripción y cooperadora puede variar según la situación económica de la región.
              La competencia de otras instituciones en la provincia y la posibilidad de optar por carreras universitarias puede influir en la elección de los estudiantes y su decisión de asistir al IES Nº 9-024.

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Acordeón: Amenaza de Nuevos Competidores */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{
            marginBottom: '20px !important',
            borderRadius: '8px !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel3' ? '#0073E6 !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Color del encabezado
              }}
            >
              Amenaza de Nuevos Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#666 !important',
              maxWidth: '700px !important',
              margin: '0 auto !important',
              padding: '20px !important',
              textAlign: 'left !important',
              lineHeight: '1.7 !important',
              fontFamily: 'Poppins, sans-serif !important',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontSize: '1.2rem !important',
                color: '#666 !important',
                lineHeight: '1.7 !important',
              }}
            >
              La creación de nuevos institutos de educación superior en la región implica altos costos y regulaciones estrictas por parte del Estado, lo que limita la entrada de nuevos competidores.
              El IES Nº 9-024 tiene un fuerte posicionamiento en la comunidad de Lavalle y una relación establecida con el gobierno local, lo cual dificulta la entrada de otras instituciones en su área de influencia.

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Acordeón: Amenaza de Productos Sustitutos */}
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          sx={{
            marginBottom: '20px !important',
            borderRadius: '8px !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel4' ? '#0073E6 !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Color del encabezado
              }}
            >
              Amenaza de Instituciones con las cuales sustituir al IES
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#666 !important',
              maxWidth: '700px !important',
              margin: '0 auto !important',
              padding: '20px !important',
              textAlign: 'left !important',
              lineHeight: '1.7 !important',
              fontFamily: 'Poppins, sans-serif !important',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontSize: '1.2rem !important',
                color: '#666 !important',
                lineHeight: '1.7 !important',
              }}
            >
            Los estudiantes tienen la opción de cursar carreras universitarias en otras instituciones públicas o privadas, lo que representa una alternativa directa a la formación ofrecida por el IES Nº 9-024.
            Los cursos online y las plataformas de aprendizaje a distancia, especialmente aquellas que ofrecen formación profesional, pueden ser una alternativa para quienes buscan flexibilidad y costos más bajos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Acordeón: Rivalidad entre Competidores */}
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
          sx={{
            marginBottom: '20px !important',
            borderRadius: '8px !important',
            backgroundColor: '#ffffff !important',
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel5' ? '#0073E6 !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Color del encabezado
              }}
            >
              Rivalidad entre Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important',
              color: '#666 !important',
              maxWidth: '700px !important',
              margin: '0 auto !important',
              padding: '20px !important',
              textAlign: 'left !important',
              lineHeight: '1.7 !important',
              fontFamily: 'Poppins, sans-serif !important',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontSize: '1.2rem !important',
                color: '#666 !important',
                lineHeight: '1.7 !important',
              }}
            >
            Existen otras instituciones de educación superior en Mendoza que compiten por los mismos estudiantes, especialmente en carreras técnicas y de formación docente.
            Sin embargo, el IES Nº 9-024 tiene la ventaja de su fuerte conexión con la comunidad de Lavalle y su especialización en atender las necesidades locales, lo que le permite diferenciarse de sus competidores. 
            Además, el IES es el único Instituto de Educación Superior público y gratuito del Departamento de Lavalle, ya que también se encuentra en la región el Instituto Nuestra Sra. del Rosario pero además de contar con solo carreras afines a la docencia, es privado. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Imagen de Porter debajo de los acordeones */}
      <div className={styles.imageContainer}>
      <img
    src={porterImage}
    alt="Análisis de 5 Fuerzas de Porter"
    className={styles.porterLilaImage}
      />
    </div>
    </div>
  );
};

export default PORTERlila;
