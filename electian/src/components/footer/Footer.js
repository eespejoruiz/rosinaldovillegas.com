import React from 'react'
import { Link } from 'react-router-dom'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="shape-1">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_223)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_223" x1="795" y1="5.99883" x2="9.55538e-10" y2="5.99883"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#274DCF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_224)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_224" x1="2.31964e-06" y1="5.99883" x2="795" y2="5.99898"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#DE2045" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="widget about-widget">
                                <ul className="social-icons-large" style={{
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    gap: window.innerWidth <= 768 ? '15px' : '30px', 
                                    marginBottom: '0', 
                                    listStyle: 'none', 
                                    padding: '0',
                                    flexWrap: 'wrap'
                                }}>
                                    <li>
                                        <a href="https://www.facebook.com/rosinaldo.villegas.campos/" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: window.innerWidth <= 768 ? '32px' : '48px', 
                                            width: window.innerWidth <= 768 ? '60px' : '80px', 
                                            height: window.innerWidth <= 768 ? '60px' : '80px', 
                                            lineHeight: window.innerWidth <= 768 ? '60px' : '80px', 
                                            display: 'block', 
                                            textAlign: 'center', 
                                            border: '2px solid #344177', 
                                            borderRadius: '50%', 
                                            transition: 'all 0.4s ease-in-out', 
                                            color: '#344177'
                                        }} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177'; e.target.style.color = '#344177';}}>
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/rosinaldo.villegascampos/" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: window.innerWidth <= 768 ? '32px' : '48px', 
                                            width: window.innerWidth <= 768 ? '60px' : '80px', 
                                            height: window.innerWidth <= 768 ? '60px' : '80px', 
                                            lineHeight: window.innerWidth <= 768 ? '60px' : '80px', 
                                            display: 'block', 
                                            textAlign: 'center', 
                                            border: '2px solid #344177', 
                                            borderRadius: '50%', 
                                            transition: 'all 0.4s ease-in-out', 
                                            color: '#344177'
                                        }} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177'; e.target.style.color = '#344177';}}>
                                            <i className="ti-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/rosinaldo-villegas-campos-6b5552371/" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: window.innerWidth <= 768 ? '32px' : '48px', 
                                            width: window.innerWidth <= 768 ? '60px' : '80px', 
                                            height: window.innerWidth <= 768 ? '60px' : '80px', 
                                            lineHeight: window.innerWidth <= 768 ? '60px' : '80px', 
                                            display: 'block', 
                                            textAlign: 'center', 
                                            border: '2px solid #344177', 
                                            borderRadius: '50%', 
                                            transition: 'all 0.4s ease-in-out', 
                                            color: '#344177'
                                        }} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177'; e.target.style.color = '#344177';}}>
                                            <i className="ti-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@rosinaldo.villegascampos" target="_blank" rel="noopener noreferrer" style={{
                                            fontSize: window.innerWidth <= 768 ? '32px' : '48px', 
                                            width: window.innerWidth <= 768 ? '60px' : '80px', 
                                            height: window.innerWidth <= 768 ? '60px' : '80px', 
                                            lineHeight: window.innerWidth <= 768 ? '60px' : '80px', 
                                            display: 'block', 
                                            textAlign: 'center', 
                                            border: '2px solid #344177', 
                                            borderRadius: '50%', 
                                            transition: 'all 0.4s ease-in-out', 
                                            color: '#344177'
                                        }} onMouseEnter={(e) => {e.target.style.background = '#DE2045'; e.target.style.borderColor = 'transparent'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.background = 'transparent'; e.target.style.borderColor = '#344177'; e.target.style.color = '#344177';}}>
                                            <svg width={window.innerWidth <= 768 ? "32" : "48"} height={window.innerWidth <= 768 ? "32" : "48"} viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">Hecho con amor por <a href="https://anomaly.pe" target="_blank" rel="noopener noreferrer">Anomaly LA</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;