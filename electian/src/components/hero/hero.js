import React from "react";
import { Link } from 'react-router-dom'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import hero1 from '../../images/slider/slide-6.webp'
import hero2 from '../../images/slider/slide-4.webp'
import hero3 from '../../images/slider/slide-8.webp'

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-hero-slider-s2  wpo-hero-slider-1">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="slide-inner slide-bg-image" data-background="assets/images/slider/slide-6.jpg">
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h2>EL RENACER DE UTCUBAMBA EMPIEZA HOY. CON HECHOS.</h2>
                                            </div>
                                            <div data-swiper-parallax="400" className="slide-text">
                                                <p>Provincia modelo: honesta y moderna, con oportunidades para jóvenes, agricultores y emprendedores; becas e idiomas, innovación para pymes y un plan centrado en las personas.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <Link onClick={ClickHandler} to="/propuestas" className="theme-btn-s3">Ver propuestas</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>UTCUBAMBA PRIMERO. HOY Y SIEMPRE.</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Orden, trabajo y seguridad en cada barrio y caserío: obras visibles, servicios dignos y transparencia con una gestión que responde.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <Link onClick={ClickHandler} to="/volunteer" className="theme-btn-s3">Únete hoy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>BASTA DE ABANDONO. ES HORA DE HACER.</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Seguridad 24/7, agua y saneamiento, pavimentación y riego tecnificado, apoyo a las familias y obras que mejoran la vida ahora.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div data-swiper-parallax="500" className="slide-btns">
                                            <Link onClick={ClickHandler} to="/volunteer" className="theme-btn-s3">Ser voluntario</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>


                </div>
            </div>
        </section>
    )
}

export default Hero;