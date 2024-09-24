import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PORTERlila.module.css';
import PORTERlilaImage from '../assets/imagenes/PORTERlila.png';

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
          color: '#c1a6cf !important',  // Color del título
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
          margin: '0 auto 40px auto !important', // Centrado y espacio inferior
          textAlign: 'center !important',
          lineHeight: '1.7 !important',
        }}
      >
        El análisis de las 5 Fuerzas de Porter examina la competitividad de Lila Software Studio dentro de su industria,
        evaluando el poder de negociación de los proveedores y clientes, la amenaza de nuevos competidores y productos 
        sustitutos, y la rivalidad entre competidores.
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
            backgroundColor: '#ffffff !important',  // Fondo blanco siempre cuando se expande
            boxShadow: 'none !important', // Eliminar sombras
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel1' ? '#c1a6cf !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}  // Usamos la clase de CSS module
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Aseguramos el texto en blanco
              }}
            >
              Poder de Negociación de los Proveedores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important', // Fondo blanco siempre cuando se expande
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
              Lila depende de una serie de proveedores de herramientas tecnológicas esenciales para su operación diaria, 
              como Google Cloud (para la infraestructura en la nube), Notion (para la gestión de proyectos), Figma 
              (para el diseño de interfaces), y Slack (para la comunicación interna). Estas plataformas son fundamentales 
              para mantener la eficiencia y productividad de sus equipos, pero también representan un riesgo. Cambiar de 
              proveedor no es sencillo, ya que las herramientas mencionadas están profundamente integradas en los flujos 
              de trabajo de la empresa. La dependencia de estas plataformas crea una barrera para cambiar de proveedor, lo 
              que puede hacer a Lila vulnerable ante aumentos de costos o cambios en las condiciones de uso. Además, el 
              hecho de que estas herramientas sean estándares en la industria tecnológica reduce la posibilidad de negociar 
              precios más competitivos.
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
            backgroundColor: '#ffffff !important',  // Fondo blanco siempre cuando se expande
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel2' ? '#c1a6cf !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}  // Usamos la clase de CSS module
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Aseguramos el texto en blanco
              }}
            >
              Poder de Negociación de los Clientes
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
              Lila tiene la ventaja de trabajar con clientes que valoran la calidad y la personalización de sus productos, 
              lo que les otorga cierta flexibilidad en términos de fijación de precios. Sin embargo, los clientes también 
              tienen opciones para cambiar de proveedor si no están satisfechos con los costos o el servicio. La personalización 
              y el alto nivel de involucramiento del cliente durante el proceso de desarrollo ayudan a fidelizar a los clientes 
              actuales, pero Lila debe ser consciente de que en un mercado con más competencia y nuevas soluciones tecnológicas, 
              el poder de negociación de los clientes podría aumentar.
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
            backgroundColor: '#ffffff !important',  // Fondo blanco siempre cuando se expande
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel3' ? '#c1a6cf !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}  // Usamos la clase de CSS module
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Aseguramos el texto en blanco
              }}
            >
              Amenaza de Nuevos Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important', // Fondo blanco siempre cuando se expande
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
              Aunque Lila está bien posicionada en Mendoza, la barrera de entrada en la industria del software es relativamente 
              baja en términos tecnológicos. Nuevas empresas pueden ingresar al mercado ofreciendo precios más bajos o servicios 
              especializados, lo que podría aumentar la competencia en el futuro. Sin embargo, la reputación de Lila y su enfoque 
              en la personalización del software les otorgan una ventaja competitiva que puede ser difícil de replicar por nuevos 
              actores, especialmente si Lila sigue desarrollando productos propios innovadores.
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
            backgroundColor: '#ffffff !important',  // Fondo blanco siempre cuando se expande
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel4' ? '#c1a6cf !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}  // Usamos la clase de CSS module
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Aseguramos el texto en blanco
              }}
            >
              Amenaza de Productos Sustitutos
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important', // Fondo blanco siempre cuando se expande
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
              Las soluciones low-code y no-code representan una amenaza significativa para las empresas que desarrollan software 
              a medida. Estas herramientas permiten a las empresas crear aplicaciones básicas sin necesidad de contratar desarrolladores. 
              Aunque estas soluciones no están tan personalizadas como los productos que Lila ofrece, representan una alternativa atractiva 
              para empresas con presupuestos más ajustados o menos complejidad en sus necesidades tecnológicas. Lila debe responder a esta 
              amenaza ofreciendo un nivel de personalización y soporte que no puede ser igualado por soluciones automáticas, destacando 
              el valor de sus servicios a medida.
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
            backgroundColor: '#ffffff !important',  // Fondo blanco siempre cuando se expande
            boxShadow: 'none !important',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: expanded === 'panel5' ? '#c1a6cf !important' : 'white !important' }} />}
            className={styles.porterLilaAccordionSummary}  // Usamos la clase de CSS module
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins, sans-serif !important',
                fontWeight: 700,
                color: 'white !important',  // Aseguramos el texto en blanco
              }}
            >
              Rivalidad entre Competidores
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#ffffff !important', // Fondo blanco siempre cuando se expande
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
              En Mendoza, Lila se encuentra en un entorno con pocos competidores directos que ofrezcan el mismo nivel de personalización. 
              Sin embargo, la competencia a nivel internacional es mucho más intensa. La empresa se enfrenta a competidores globales 
              que pueden ofrecer servicios a menor costo, especialmente debido a la diferencia en el tipo de cambio. La capacidad de Lila 
              para mantener su ventaja competitiva radica en su enfoque en la calidad, la cercanía con el cliente y su capacidad para 
              adaptarse rápidamente a las nuevas demandas del mercado tecnológico. Sin embargo, para mantenerse competitiva, Lila debe 
              continuar innovando y asegurarse de que sus productos y servicios ofrezcan valor agregado que sus competidores no puedan 
              replicar fácilmente.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Imagen */}
      <div style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src={PORTERlilaImage}
          alt="Análisis 5 Fuerzas de Porter"
          className={styles.porterLilaImage}  // Aquí se usa la clase del CSS module
        />
      </div>
    </div>
  );
};

export default PORTERlila;
