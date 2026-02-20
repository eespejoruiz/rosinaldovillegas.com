import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
// images
import visa from '../../images/icon/visa.png';
import mastercard from '../../images/icon/mastercard.png';
import skrill from '../../images/icon/skrill.png';
import paypal from '../../images/icon/paypal.png';

const DonatePage = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="donate-page">
            <Navbar />
            <PageTitle pageTitle={'Beca Educativa'} pagesub={'Solicitud'} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-donate-header">
                                <h2>Solicitud de Beca Educativa</h2>
                            </div>
                            <div id="Donations" className="tab-pane">
                                <form onSubmit={SubmitHandler}>
                                    <div className="wpo-donations-details">
                                        <h2>Datos Personales</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="nombre" id="nombre"
                                                    placeholder="Nombre Completo"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="number" className="form-control" name="edad" id="edad"
                                                    placeholder="Edad"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="pueblo" id="pueblo"
                                                    placeholder="Nombre del Pueblo"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="tel" className="form-control" name="telefono" id="telefono"
                                                    placeholder="Teléfono"/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email"
                                                    placeholder="Correo Electrónico"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn submit-btn">Enviar Solicitud</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </div>

    )
}

export default DonatePage;