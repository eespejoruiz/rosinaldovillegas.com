import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink, Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Inicio',
        link: '/home',
    },

    {
        id: 2,
        title: '¿Quién soy?',
        link: '/about',
    },

    {
        id: 3,
        title: 'Propuestas',
        link: '/propuestas',
    },

]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

                {/* Iconos de redes sociales */}
                <div className="mobile-social-icons" style={{padding: '20px', textAlign: 'center', borderTop: '1px solid #344177', marginTop: '20px'}}>
                    <ul style={{display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: '0', margin: '0'}}>
                        <li>
                            <a href="https://www.facebook.com/rosinaldo.villegas.campos/" target="_blank" rel="noopener noreferrer" style={{fontSize: '24px', width: '50px', height: '50px', lineHeight: '50px', display: 'block', textAlign: 'center', border: '2px solid #344177', borderRadius: '50%', color: '#e7e7e7', transition: 'all 0.4s ease-in-out'}} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177';}}>
                                <i className="ti-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/rosinaldo.villegascampos/" target="_blank" rel="noopener noreferrer" style={{fontSize: '24px', width: '50px', height: '50px', lineHeight: '50px', display: 'block', textAlign: 'center', border: '2px solid #344177', borderRadius: '50%', color: '#e7e7e7', transition: 'all 0.4s ease-in-out'}} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177';}}>
                                <i className="ti-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rosinaldo-villegas-campos-6b5552371/" target="_blank" rel="noopener noreferrer" style={{fontSize: '24px', width: '50px', height: '50px', lineHeight: '50px', display: 'block', textAlign: 'center', border: '2px solid #344177', borderRadius: '50%', color: '#e7e7e7', transition: 'all 0.4s ease-in-out'}} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177';}}>
                                <i className="ti-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@rosinaldo.villegascampos" target="_blank" rel="noopener noreferrer" style={{fontSize: '24px', width: '50px', height: '50px', lineHeight: '50px', display: 'block', textAlign: 'center', border: '2px solid #344177', borderRadius: '50%', color: '#e7e7e7', transition: 'all 0.4s ease-in-out'}} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177';}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;