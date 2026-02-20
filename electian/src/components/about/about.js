import React from 'react'
import abImg from '../../images/about-s2.jpg'
import icon1 from '../../images/about-icon-1.png'
import icon2 from '../../images/about-icon-2.png'

const About = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Sobre mí</span>
                                <h2>Soy Rosinaldo Villegas.
                                    Juntos escribiremos la nueva historia de Utcubamba.</h2>
                            </div>
                            <p className="sub-text">Soy Ingeniero Agroindustrial y de Comercio Exterior. A lo largo de mi vida he liderado equipos y proyectos que impulsan el desarrollo agrícola y agroindustrial; hoy soy gerente general de Agro Unitek Cropscience (marca Grovelab). Pero, ante todo, soy vecino de Utcubamba: camino nuestros barrios y caseríos, escucho a la gente y sé que merecemos más—servicios dignos, oportunidades reales y un municipio honesto que rinda cuentas. Creo en el trabajo en equipo, la transparencia y los resultados. Mi compromiso es claro: combatir la corrupción, llevar seguridad 24/7, abrir puertas con educación y becas, y activar empleo con innovación, PYMES fuertes y apoyo directo al agro. Este proyecto se llama “Un sueño llamado Utcubamba” y empieza contigo.</p>

                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="about-content">
                                        <div className="images">
                                            <img src={icon1} alt=""/>
                                        </div>
                                        <div className="text">
                                            <h3>Mi campaña</h3>
                                            <p>Propuestas con metas y cronograma: corrupción cero, seguridad, educación y becas, centro de innovación, PYMES y agro productivo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="about-content">
                                        <div className="images">
                                            <img src={icon2} alt=""/>
                                        </div>
                                        <div className="text">
                                            <h3>Súmate como voluntario</h3>
                                            <p>Necesito tu voz en cada barrio. Regístrate y ayúdame a organizar brigadas, informar a vecinos y cuidar cada mesa el día de la elección.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;