import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PORTERinterluz.module.css';
import PORTERinterluzImage from '../assets/imagenes/PORTERinterluz.png';

const PORTERinterluz = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.porterInterluzContainer}>
      <Typography
        variant="h2"
        className={styles.porterInterluzTitle}
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '3.5rem',
          color: '#68B649',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Análisis 5 Fuerzas de Porter
      </Typography>
      
      <Typography
        variant="body1"
        className={styles.porterInterluzIntroText}
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.4rem',
          color: '#666',
          lineHeight: '1.7',
          maxWidth: '800px',
          margin: '0 auto 40px',
          textAlign: 'center',
        }}
      >
        El análisis de las 5 Fuerzas de Porter examina la competitividad de Interluz dentro del mercado de telecomunicaciones,
        evaluando factores como el poder de negociación de los proveedores y consumidores, la amenaza de nuevos competidores,
        la rivalidad entre competidores y los productos sustitutos.
      </Typography>

      <div className={styles.accordionWrapper}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />} sx={{ backgroundColor: '#68B649' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1.6rem',
              }}
            >
              Poder de Negociación de los Proveedores
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#FFFFFF' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.7',
              }}
            >
              <strong>Proveedores Clave:</strong> Interluz depende de proveedores de equipos de fibra óptica, tecnología de red y servicios de mantenimiento. Estos proveedores son críticos para el funcionamiento de su infraestructura, especialmente para el suministro de cables de fibra, routers, y equipos de monitoreo.
              <br /><br />
              <strong>Cantidad de Proveedores:</strong> Interluz tiene varios proveedores para sus necesidades tecnológicas, pero pocos de ellos son realmente estratégicos debido a la especificidad y calidad que requieren los equipos de fibra óptica.
              <br /><br />
              <strong>Facilidad de Cambio de Proveedor:</strong> Cambiar de proveedor puede ser complicado, ya que se requieren equipos de alta calidad que cumplan con ciertos estándares. Además, la sustitución de proveedores puede implicar procesos de instalación o adaptación adicionales, lo que aumentaría los costos.
              <br /><br />
              <strong>Diferenciación de Insumos:</strong> Los insumos tecnológicos de Interluz, como los equipos de fibra óptica y el software de gestión de redes, son altamente especializados. Esto limita la capacidad de cambio y otorga un mayor poder de negociación a los proveedores.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Repite el mismo componente Accordion para cada fuerza con sus respectivos textos */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />} sx={{ backgroundColor: '#68B649' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1.6rem',
              }}
            >
              Poder de Negociación de los Consumidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#FFFFFF' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.7',
              }}
            >
              {/* Contenido del acordeón */}
              <strong>Principales Clientes:</strong> Los principales clientes de Interluz son hogares, pequeñas empresas, y entidades públicas en áreas rurales de Lavalle, que buscan un servicio de internet estable y rápido.
              <br /><br />
              <strong>Facilidad de Cambio de Proveedor:</strong> La competencia en el área incluye proveedores de internet satelital como Tachicom y Micom. Sin embargo, para los clientes que valoran una conexión de alta velocidad y estabilidad, cambiar a un proveedor de internet satelital puede representar una pérdida significativa en calidad.
              <br /><br />
              <strong>Sensibilidad al Precio y a la Calidad:</strong> Los clientes de Interluz tienden a ser sensibles a la calidad, ya que buscan una conexión estable y confiable que el internet satelital no siempre puede ofrecer. En cuanto al precio, los clientes suelen ser moderadamente sensibles; sin embargo, la diferenciación en calidad permite a Interluz justificar tarifas superiores.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Repite lo mismo para los otros 3 acordeones */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />} sx={{ backgroundColor: '#68B649' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1.6rem',
              }}
            >
              Amenaza de Ingreso de Productos Sustitutivos
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#FFFFFF' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.7',
              }}
            >
              {/* Contenido del acordeón */}
              <strong>Alternativas Disponibles:</strong> Las alternativas más comunes son los servicios de internet satelital ofrecidos por empresas como Tachicom y Micom. Existen también opciones de internet móvil, aunque estas suelen ser menos estables y más costosas para un uso constante.
              <br /><br />
              <strong>Facilidad de Acceso a Soluciones Alternativas:</strong> Los clientes pueden acceder a servicios satelitales fácilmente, pero estos servicios no suelen ofrecer la misma calidad en términos de velocidad y estabilidad que la fibra óptica.
              <br /><br />
              <strong>Diferenciación del Servicio de Interluz:</strong> Interluz se distingue por su infraestructura de fibra óptica, que ofrece mayor velocidad y estabilidad en comparación con las opciones satelitales.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />} sx={{ backgroundColor: '#68B649' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1.6rem',
              }}
            >
              Amenaza de Entradas de Nuevos Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#FFFFFF' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.7',
              }}
            >
              {/* Contenido del acordeón */}
              <strong>Barreras de Entrada:</strong> Las principales barreras de entrada incluyen el alto costo de inversión inicial para desplegar infraestructura de fibra óptica y las licencias regulatorias necesarias para operar en la industria de telecomunicaciones.
              <br /><br />
              <strong>Dificultad de Entrada al Mercado:</strong> La entrada de nuevos competidores es complicada debido a los elevados costos de infraestructura y las economías de escala necesarias para operar de manera rentable en zonas rurales.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />} sx={{ backgroundColor: '#68B649' }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1.6rem',
              }}
            >
              Rivalidad entre Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#FFFFFF' }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                color: '#666',
                lineHeight: '1.7',
              }}
            >
              {/* Contenido del acordeón */}
              <strong>Competencia Directa:</strong> Los competidores directos de Interluz en Lavalle son principalmente Tachicom y Micom, que ofrecen servicios de internet satelital.
              <br /><br />
              <strong>Intensidad de la Competencia:</strong> La competencia se basa en la diferenciación tecnológica. Interluz destaca en términos de calidad.
              <br /><br />
              <strong>Estrategias de Competencia:</strong> Los competidores, como Tachicom y Micom, están utilizando estrategias de penetración de mercado mediante precios más bajos y la cobertura en áreas donde la fibra óptica aún no ha llegado.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={styles.imageContainer}>
        <img src={PORTERinterluzImage} alt="Análisis 5 Fuerzas de Porter" className={styles.porterInterluzImage} />
      </div>
    </div>
  );
};

export default PORTERinterluz;
