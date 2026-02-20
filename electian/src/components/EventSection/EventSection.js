import React, { useState } from "react";
import Events from '../../api/events'

const EventSection = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    const openVideoModal = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedVideo('');
    };
    return (
        <section className="wpo-event-section">
    <div className="container-fluid">
        <div className="event-wrap">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-12">
                    <div className="wpo-section-title">
                        <span>Agenda de campaña</span>
                        <h2>Conoce algunos de nuestros eventos</h2>
                    </div>
                </div>
                {Events.map(( event, evt) => (
                        <div className="col-lg-3 col-md-6 col-12" key={evt}>
                            <div className="event-item">
                                <div className="image" onClick={() => openVideoModal(event.eVideo)} style={{cursor: 'pointer', position: 'relative'}}>
                                    <video 
                                        width="100%" 
                                        height="200" 
                                        style={{objectFit: 'cover'}}
                                        poster=""
                                    >
                                        <source src={event.eVideo} type="video/mp4" />
                                        Tu navegador no soporta el elemento video.
                                    </video>
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'rgba(222, 32, 69, 0.8)',
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '24px'
                                    }}>
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                                <div className="event-content">
                                    <span><i className="fa fa-map-marker" aria-hidden="true"></i>{event.location}</span>
                                    <h2 style={{cursor: 'pointer'}} onClick={() => openVideoModal(event.eVideo)}>{event.title}</h2>
                                    <div className="event-date">
                                        <span className="date"><i className="fa fa-calendar"
                                                aria-hidden="true"></i>{event.date}</span>
                                        <span className="time"><i className="fa fa-clock-o" aria-hidden="true"></i>{event.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   ))
                }
            </div>
        </div>
    </div>
    <div className="shape-1">
        <svg width="960" height="70" viewBox="0 0 960 70" fill="none">
            <rect width="960" height="70" transform="matrix(-1 0 0 1 960 0)" fill="url(#paint0_linear_1_168)" />
            <defs>
                <linearGradient id="paint0_linear_1_168" x1="2.66246e-06" y1="35.3845" x2="960" y2="35.3845"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#DE2045" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-2">
        <svg width="960" height="70" viewBox="0 0 960 70" fill="none">
            <rect width="960" height="70" transform="matrix(-1 0 0 1 960 0)" fill="url(#paint0_linear_1_167)" />
            <defs>
                <linearGradient id="paint0_linear_1_167" x1="2.66246e-06" y1="35.3845" x2="960" y2="35.3845"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#274DCF" />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-3">
        <svg width="354" height="354" viewBox="0 0 354 354" fill="none">
            <circle cx="177" cy="177" r="177" fill="url(#paint0_linear_1_165)" />
            <defs>
                <linearGradient id="paint0_linear_1_165" x1="177" y1="0" x2="177" y2="354"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    <div className="shape-4">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle r="150" transform="matrix(-4.37114e-08 1 1 4.37114e-08 150 150)"
                fill="url(#paint0_linear_1_166)" />
            <defs>
                <linearGradient id="paint0_linear_1_166" x1="150" y1="0" x2="150" y2="300"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>

    {/* Modal para video */}
    {modalOpen && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }} onClick={closeModal}>
            <div style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%'
            }} onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={closeModal}
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '0',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '30px',
                        cursor: 'pointer',
                        zIndex: 10000
                    }}
                >
                    <i className="fa fa-times"></i>
                </button>
                <video 
                    width="800" 
                    height="450" 
                    controls 
                    autoPlay
                    style={{maxWidth: '100%', maxHeight: '100%'}}
                >
                    <source src={selectedVideo} type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                </video>
            </div>
        </div>
    )}
</section>
    );
}

export default EventSection;