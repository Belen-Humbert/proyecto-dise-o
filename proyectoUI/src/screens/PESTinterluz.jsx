import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../Styles/PESTinterluz.module.css';
import PESTImage from '../assets/imagenes/PESTinterluz.png';

const PESTinterluz = () => {
    return (
        <>
            <div className={styles.pestInterluzContainer}>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        color: '#68B649',
                        fontSize: '3rem',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}
                >
                    Análisis PEST
                </Typography>

                {/* Párrafo introductorio */}
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto 40px',
                        textAlign: 'center',
                        lineHeight: 1.7,
                    }}
                >
                    El análisis PEST de Interluz examina los factores Políticos, Económicos, Sociales y Tecnológicos que influyen en el entorno de la empresa, permitiéndole identificar oportunidades y amenazas en su mercado objetivo, especialmente en las áreas rurales.
                </Typography>

                <div className={styles.accordionWrapper}>
                    {/* Estructura Económica */}
                    <Accordion sx={{ marginBottom: '20px', borderRadius: '8px', backgroundColor: '#68B649' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ backgroundColor: '#68B649', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                                Estructura Económica
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', color: '#666', lineHeight: 1.7 }}>
                                <strong>Factores Económicos:</strong> Los principales factores económicos que afectan a Interluz incluyen los altos costos de infraestructura, particularmente para la instalación y el mantenimiento de la fibra óptica en áreas rurales. Estos costos son significativos debido a la extensión del terreno y la necesidad de mantener una infraestructura robusta en condiciones de terreno difíciles. Además, los costos de importación de equipos pueden ser elevados debido a los aranceles y a la dependencia de tecnología internacional.
                                <br /><br />
                                <strong>Situación Económica del País:</strong> La situación económica de Argentina influye directamente en la capacidad de Interluz para ofrecer servicios de calidad y mantener su competitividad. La inflación y la devaluación de la moneda aumentan los costos operativos, lo que puede limitar las posibilidades de expansión. Además, la disponibilidad de financiamiento puede ser restringida, ya que las tasas de interés elevadas dificultan la obtención de capital para inversiones a largo plazo.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Estructura Tecnológica */}
                    <Accordion sx={{ marginBottom: '20px', borderRadius: '8px', backgroundColor: '#68B649' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ backgroundColor: '#68B649', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                                Estructura Tecnológica
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', color: '#666', lineHeight: 1.7 }}>
                                <strong>Avances Tecnológicos:</strong> La tecnología de fibra óptica continúa mejorando, con avances en capacidad de transmisión y reducción de costos. Además, la aparición de nuevas tecnologías de internet satelital, como la red Starlink de SpaceX, podría impactar a Interluz si estas alternativas se vuelven más accesibles y económicas.
                                <br /><br />
                                <strong>Adopción de Nuevas Tecnologías:</strong> Interluz ha adoptado tecnologías avanzadas en su red de fibra óptica, lo que le permite ofrecer alta velocidad y estabilidad en comparación con el internet satelital. La empresa también está considerando implementar automatización y monitoreo IoT en su infraestructura.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Estructura Política */}
                    <Accordion sx={{ marginBottom: '20px', borderRadius: '8px', backgroundColor: '#68B649' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ backgroundColor: '#68B649', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                                Estructura Política
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', color: '#666', lineHeight: 1.7 }}>
                                <strong>Regulaciones Gubernamentales:</strong> Interluz debe cumplir con regulaciones sobre telecomunicaciones y conectividad. Las políticas de la Comisión Nacional de Comunicaciones (CNC) y de la Secretaría de Innovación Pública afectan aspectos como la calidad del servicio, tarifas máximas y acceso universal.
                                <br /><br />
                                <strong>Cambios Políticos y Regulatorios:</strong> Las políticas de apoyo a la inclusión digital podrían ser beneficiosas para Interluz, si el gobierno implementa subsidios para empresas que lleven conectividad a áreas rurales.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Estructura Social */}
                    <Accordion sx={{ marginBottom: '20px', borderRadius: '8px', backgroundColor: '#68B649' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ backgroundColor: '#68B649', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white' }}>
                                Estructura Social
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', color: '#666', lineHeight: 1.7 }}>
                                <strong>Expectativas de los Clientes:</strong> La pandemia ha acelerado el cambio hacia el trabajo remoto, el aprendizaje en línea y el entretenimiento digital, aumentando las expectativas de los clientes respecto a la velocidad y estabilidad del internet.
                                <br /><br />
                                <strong>Tendencias Sociales:</strong> Se observa una creciente demanda de conectividad en áreas rurales, no solo para uso residencial, sino también para pequeñas empresas y servicios públicos como escuelas y centros de salud.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

            <div className={styles.pestInterluzImageContainer}>
                <img src={PESTImage} alt="PEST Interluz" className={styles.pestInterluzImage} />
            </div>
        </>
    );
};

export default PESTinterluz;
