import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PESTlila.module.css';
import PESTImage from '../assets/imagenes/PESTlila.png';

const PESTlila = () => {
  return (
    <><div className={styles.pestLilaContainer}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#936A9F',
          fontSize: '3rem',
          marginBottom: '40px',
          textAlign: 'center'
        }}
      >
        Análisis PEST
      </Typography>

      <div className={styles.accordionWrapper}>
        {/* Estructura Económica */}
        <Accordion
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#c1a6cf',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            sx={{
              backgroundColor: '#c1a6cf',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
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
              <strong>Tasa de Crecimiento Económico:</strong> En Argentina, la desaceleración económica es un factor crítico. Actualmente, la falta de inversión en muchos sectores debido a la incertidumbre económica afecta la demanda de servicios de software. Lila, al operar en este entorno, enfrenta desafíos para captar nuevos clientes tanto locales como internacionales, ya que el poder adquisitivo ha disminuido y los negocios son más cautelosos con sus inversiones en tecnología.
              <br /><br />
              <strong>Inflación y Tasas de Interés:</strong> La inflación en Argentina es uno de los factores económicos más relevantes, ya que los costos operativos, incluidos los salarios y los insumos tecnológicos, aumentan de manera continua. Esto afecta los márgenes de ganancia de la empresa. Además, las elevadas tasas de interés dificultan el acceso a financiamiento, lo que limita las posibilidades de inversión en tecnología y expansión.
              <br /><br />
              <strong>Disponibilidad de Capital y Financiación:</strong> Existen programas gubernamentales y privados que apoyan el financiamiento de startups y empresas tecnológicas. Sin embargo, Lila ha optado por autofinanciarse hasta ahora, lo que puede limitar su crecimiento. La opción de acceder a capital de riesgo podría ser una estrategia futura para impulsar la expansión y la innovación.
              <br /><br />
              <strong>Tipo de Cambio y Competitividad:</strong> El tipo de cambio en Argentina varía considerablemente, lo que puede afectar la competitividad de los productos y servicios de Lila en el exterior. Si bien el mercado local puede volverse más costoso, las exportaciones de software se vuelven más atractivas debido a la depreciación de la moneda, brindando oportunidades para internacionalizar sus servicios.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Estructura Tecnológica */}
        <Accordion
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#c1a6cf',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            sx={{
              backgroundColor: '#c1a6cf',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
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
              <strong>Innovación y Desarrollo Tecnológico:</strong> El uso de tecnologías emergentes, como la Inteligencia Artificial (IA), es una de las tendencias clave que está transformando la industria del software. Lila ha comenzado a integrar IA en su flujo de trabajo para automatizar tareas y mejorar la eficiencia en el desarrollo de productos, lo que representa una ventaja competitiva en el mercado.
              <br /><br />
              <strong>Adopción de Nuevas Tecnologías:</strong> Lila ha demostrado estar abierta a incorporar nuevas tecnologías que mejoren la calidad de sus productos y servicios. Herramientas como Google Cloud, Figma, y Notion son fundamentales para la operatividad diaria, y su flexibilidad para adoptar nuevas tecnologías les permite mantenerse competitivos en un mercado que avanza rápidamente. Sin embargo, la empresa debe continuar evaluando qué nuevas herramientas pueden mejorar aún más su oferta y optimizar sus procesos.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Estructura Política */}
        <Accordion
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#c1a6cf',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            sx={{
              backgroundColor: '#c1a6cf',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
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
              <strong>Estabilidad Política:</strong> Argentina enfrenta una considerable inestabilidad política que afecta tanto a la seguridad jurídica como a la estabilidad de las políticas económicas y laborales. Esto genera incertidumbre para empresas como Lila, que deben adaptarse rápidamente a cambios en la normativa fiscal o en las regulaciones que impactan su capacidad para operar.
              <br /><br />
              <strong>Regulaciones y Políticas Gubernamentales:</strong> A pesar de la inestabilidad, hay iniciativas locales que favorecen la innovación tecnológica. Programas como Mendoza Activa y Mendoza Innova incentivan la contratación formal y el desarrollo de empresas tecnológicas, lo que puede ayudar a Lila a captar recursos y expandirse dentro del mercado provincial con el apoyo de incentivos fiscales y financieros.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Estructura Social */}
        <Accordion
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#c1a6cf',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            sx={{
              backgroundColor: '#c1a6cf',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
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
              <strong>Demografía y Fuerza Laboral:</strong> Lila tiene una limitación en su capacidad para contratar talento, ya que prefiere trabajadores que estén ubicados cerca de sus oficinas para mantener un equilibrio entre el trabajo remoto y presencial. Esto puede ser un desafío en términos de reclutamiento, dado que restringe el acceso a una mayor diversidad de talento, especialmente en roles técnicos especializados que podrían encontrarse en otras regiones o países.
              <br /><br />
              <strong>Tendencias Sociales y Culturales:</strong> La adopción de herramientas low-code y no-code está en aumento, lo que podría representar tanto una oportunidad como una amenaza para Lila. Por un lado, estas tecnologías permiten a los clientes crear soluciones más rápidamente y a menor costo; por otro lado, podrían reducir la demanda de desarrollo de software a medida, que es uno de los servicios principales de Lila. La empresa deberá adaptarse a esta tendencia, ofreciendo servicios de mayor valor agregado que justifiquen la personalización del producto.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
    <div className={styles.pestLilaImageContainer}>
        <img src={PESTImage} alt="PEST Lila" className={styles.pestLilaImage} />
      </div></>
  );
};

export default PESTlila;
