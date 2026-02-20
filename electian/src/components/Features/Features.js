import React from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fImg1 from '../../images/election-donation/corrupcion-cero.png'
import fImg2 from '../../images/election-donation/seguridad-24.png'
import fImg3 from '../../images/election-donation/becas.png'
import fImg4 from '../../images/election-donation/trabajo-innovacion.png'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    centerMode: true,
    centerPadding:0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features = (props) => {
    return (
        <section className={`wpo-election-donation-section-s2 section-padding ${props.fClass}`}>
            <div className="container">
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg1} alt="" />
                                    </div>
                                    <h2>CORRUPCIÓN CERO</h2>
                                    <p>Auditorías desde el día uno, portal de gastos en tiempo real y compras públicas transparentes con control ciudadano.</p>
                                    <Link onClick={ClickHandler} to="/propuestas">DETALLES</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg2} alt="" />
                                    </div>
                                    <h2>SEGURIDAD 24/7</h2>
                                    <p>Rondas y serenazgo coordinados, juntas vecinales activas, videovigilancia e iluminación para recuperar calles y barrios.</p>
                                    <Link onClick={ClickHandler} to="/propuestas">DETALLES</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg3} alt="" />
                                    </div>
                                    <h2>EDUCACIÓN Y BECAS</h2>
                                    <p>Becas internacionales, inglés y chino gratis, tutorías y alianzas para abrir oportunidades a nuestros jóvenes.</p>
                                    <Link onClick={ClickHandler} to="/propuestas">DETALLES</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="service-icon">
                                        <img src={fImg4} alt="" />
                                    </div>
                                    <h2>TRABAJO E INNOVACIÓN</h2>
                                    <p>Centro Municipal de Innovación, impulso a PYMES, parque industrial y productividad del agro (riego y suelos).</p>
                                    <Link onClick={ClickHandler} to="/propuestas">DETALLES</Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Features;