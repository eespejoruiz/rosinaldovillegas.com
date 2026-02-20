import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import './PropuestasPage.css';

// Importando las imágenes especificadas para cada propuesta
import corrupcionCeroIcon from '../../images/election-donation/corrupcion-cero.png';
import seguridadIcon from '../../images/election-donation/seguridad-24.png';
import callesIcon from '../../images/election-donation/calles-que-se-ven.png';
import serviciosIcon from '../../images/election-donation/4.png';
import becasIcon from '../../images/election-donation/becas.png';
import trabajoIcon from '../../images/election-donation/trabajo-innovacion.png';
import quienSoyIcon from '../../images/election-donation/quien-soy.png';

const PropuestasPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Propuestas'} pagesub={'Nuestras Propuestas'} />
            
            <div className="propuestas-container">
                {/* Corrupción Cero */}
                <section className="propuesta-section corruption-zero">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={corrupcionCeroIcon} alt="Corrupción Cero" />
                            </div>
                            <h2>CORRUPCIÓN CERO</h2>
                            <p>
                                La corrupción es uno de los principales problemas que frena el desarrollo de Utcubamba. 
                                Nuestro compromiso es claro: implementar una gestión totalmente transparente, con cuentas 
                                claras y la participación activa de la ciudadanía en la vigilancia de los recursos municipales. 
                                Auditorías desde el día uno, portal de gastos en tiempo real y se crearán mecanismos de 
                                fiscalización abiertos, donde cada vecino pueda conocer en qué se invierte cada sol, 
                                asegurando que el dinero del pueblo regrese al pueblo en obras y servicios de calidad 
                                para que así se pueda sentir el cambio en cada parte de nuestra provincia, destinando 
                                los recursos para un futuro mejor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Rondas + Serenazgo */}
                <section className="propuesta-section security">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={seguridadIcon} alt="Rondas + Serenazgo" />
                            </div>
                            <h2>RONDAS + SERENAZGO</h2>
                            <p>
                                Fortaleceremos la unión entre las rondas campesinas y el serenazgo municipal en toda la 
                                provincia, dotándolos de capacitación, equipamiento y estrategias conjuntas para una mayor 
                                seguridad. Con este trabajo en equipo, construiremos barrios y comunidades más seguras, 
                                donde el respeto y la prevención del delito sean prioridad. También se instalarán cámaras 
                                de videovigilancia dentro de la ciudad para tener una ciudad segura. La seguridad será 
                                un derecho garantizado, no un privilegio, combatiremos la delincuencia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Servicios Dignos */}
                <section className="propuesta-section services">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={serviciosIcon} alt="Servicios Dignos" />
                            </div>
                            <h2>SERVICIOS DIGNOS</h2>
                            <p>
                                Se necesita servicios básicos de calidad. Nos comprometemos a llevar agua potable, 
                                energía eléctrica, saneamiento y limpieza pública a todos los rincones de la provincia. 
                                Además, se optimizarán los servicios ya existentes para que sean constantes, eficientes 
                                y accesibles así todos podamos acceder y no quede ningún vecino fuera del proyecto. 
                                La meta es clara: que cada ciudadano viva con dignidad, sin tener que sufrir y poder 
                                gozar de una vida mejor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Calles que se ven */}
                <section className="propuesta-section infrastructure">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={callesIcon} alt="Calles que se ven" />
                            </div>
                            <h2>CALLES QUE SE VEN</h2>
                            <p>
                                Pavimentaremos calles en la ciudad y mejoraremos las trochas carrozables en las 
                                comunidades de los centros poblados y caseríos, para que el transporte sea más rápido, 
                                seguro y eficiente. Esto no solo beneficia a los vecinos, sino también a los agricultores 
                                y comerciantes que podrán movilizar sus productos con mayor facilidad, impulsando así 
                                la economía local. El desarrollo empieza con buenas vías de comunicación.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Oportunidades a Jóvenes */}
                <section className="propuesta-section youth">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={becasIcon} alt="Oportunidades a Jóvenes" />
                            </div>
                            <h2>OPORTUNIDAD A JÓVENES</h2>
                            <p>
                                Crearemos oportunidades para nuestros jóvenes con un programa de becas que premie el 
                                esfuerzo y el talento. Además, impulsaremos la enseñanza gratuita de idiomas como inglés 
                                y chino, abriendo puertas a nuevas posibilidades académicas y laborales en un mundo cada 
                                vez más globalizado. Apostar por la educación es invertir en el futuro de Utcubamba y 
                                en el liderazgo de nuestra juventud.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impulso a MYPES */}
                <section className="propuesta-section business">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={trabajoIcon} alt="Impulso a MYPES" />
                            </div>
                            <h2>IMPULSO A MYPES</h2>
                            <p>
                                Los pequeños y medianos emprendedores son el motor de la economía local. Brindaremos 
                                capacitaciones, asesoría técnica y apoyo para acceder a créditos y programas de 
                                financiamiento. De esta manera, las PYMES tendrán las herramientas necesarias para 
                                crecer, innovar y generar empleo en nuestra provincia así crecemos y tenemos 
                                oportunidades todos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Agro Productivo */}
                <section className="propuesta-section agriculture">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={trabajoIcon} alt="Agro Productivo" />
                            </div>
                            <h2>AGRO PRODUCTIVO</h2>
                            <p>
                                El agricultor será prioridad en nuestra gestión. Implementaremos sistemas de riego 
                                tecnificado que optimicen el uso del agua, incrementando la productividad y reduciendo 
                                pérdidas. Además, realizaremos estudios de suelo que permitan a los agricultores conocer 
                                qué cultivos son más rentables y sostenibles en cada zona. Mejoramiento de canales 
                                instalación de riego tecnificado y construcción de reservorios. Con tecnología y 
                                conocimiento, lograremos que el campo sea una fuente de bienestar y progreso.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Boticas y Albergues */}
                <section className="propuesta-section health-shelter">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={serviciosIcon} alt="Boticas y Albergues" />
                            </div>
                            <h2>BOTICAS Y ALBERGUES</h2>
                            <p>
                                Pensamos en quienes más lo necesitan. Crearemos albergues municipales para dar refugio 
                                y atención a personas en situación de abandono o vulnerabilidad como: violencia familiar, 
                                abandono infantil, personas de la tercera edad, ofreciéndoles un espacio digno y seguro. 
                                Asimismo, se implementará la Botica Municipal, un servicio de farmacia que garantizará 
                                medicamentos de calidad a precios accesibles para toda la población. La salud y el 
                                bienestar de los vecinos serán una prioridad constante.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quién Soy */}
                <section className="propuesta-section about-candidate">
                    <div className="container">
                        <div className="propuesta-content">
                            <div className="propuesta-icon">
                                <img src={quienSoyIcon} alt="Quién Soy" />
                            </div>
                            <h2>QUIÉN SOY</h2>
                            <div className="candidate-info">
                                <p>
                                    Soy <strong>Rosinaldo Villegas</strong>, un joven profesional y emprendedor nacido en la 
                                    provincia de Utcubamba, profundamente comprometido con el progreso de mi tierra y el 
                                    bienestar de cada familia que la habita. Desde pequeño aprendí que el trabajo duro, 
                                    la honestidad y el amor por nuestra tierra son los valores que nos permiten salir adelante.
                                </p>
                                <p>
                                    Mi infancia en el campo me enseñó lo que significa esforzarse cada día y lo importante 
                                    que es nunca olvidar de dónde venimos. Con el tiempo, tuve la oportunidad de emprender 
                                    y fundar <strong>Grovelab</strong>, una empresa que me permitió entender de cerca las 
                                    necesidades de nuestros agricultores y valorar aún más el esfuerzo que cada familia 
                                    hace para llevar adelante el campo, ellos son quienes son la base de nuestra economía 
                                    y parte esencial de nuestra identidad.
                                </p>
                                <p>
                                    Estoy convencido de que la juventud debe ser protagonista del cambio. Por eso, una de 
                                    mis prioridades es impulsar a nuestros jóvenes a través de la educación, el acceso a 
                                    becas y la enseñanza de idiomas que les abran las puertas al mundo. Creo en ellos, 
                                    en su capacidad para transformar la provincia y convertirla en un lugar de oportunidades.
                                </p>
                                <p>
                                    No soy un político tradicional: soy un ciudadano como tú, que cree que juntos podemos 
                                    construir el Utcubamba que todos merecemos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PropuestasPage;