import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo-s3.svg'
import LogoBlue from '../../images/logo-blue.svg'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'


const Header = (props) => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    const isVolunteerPage = location.pathname === '/volunteer';
    const isDonatePage = location.pathname === '/donate';
    const isPropuestasPage = location.pathname === '/propuestas';
    const currentLogo = (isAboutPage || isVolunteerPage || isDonatePage || isPropuestasPage) ? LogoBlue : Logo;

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <header id="header" className={`${props.hclass}`}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3  col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-sm-4 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={currentLogo} alt="logo" style={{maxWidth: '340px', width: 'auto', height: 'auto'}} /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-sm-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Inicio</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">¿Quién soy?</Link></li>
                                        <li><Link onClick={ClickHandler} to="/propuestas">Propuestas</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/volunteer"><span className="text">SER VOLUNTARIO</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-user"></i>
                                            </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;