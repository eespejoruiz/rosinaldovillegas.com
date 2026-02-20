import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import vImg from '../../images/volunteer.jpg'
import TeamSection from '../../components/TeamSection/TeamSection';


const VolunteerPage = (props) => {

    const [forms, setForms] = useState({
        nombre: '',
        celular: '',
        edad: '',
        pueblo: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Este campo es obligatorio.',
            alpha_space: 'Solo se permiten letras y espacios.',
            numeric: 'Solo se permiten números.',
            min: 'Debe ser mayor a :attribute años.',
            max: 'Debe ser menor a :attribute años.',
            phone: 'Ingrese un número de celular válido (9 dígitos).'
        },
        validators: {
            phone: {
                message: 'Ingrese un número de celular válido (9 dígitos).',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[0-9]{9}$/)
                }
            }
        }
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setIsSubmitting(true);
            setSubmitStatus('');
            
            try {
                const formData = new FormData();
                formData.append('nombre', forms.nombre);
                formData.append('celular', forms.celular);
                formData.append('edad', forms.edad);
                formData.append('pueblo', forms.pueblo);
                formData.append('mensaje', forms.mensaje);

                const response = await fetch('https://formspree.io/f/myznrrkn', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    setSubmitStatus('success');
                    setForms({
                        nombre: '',
                        celular: '',
                        edad: '',
                        pueblo: '',
                        mensaje: ''
                    });
                    validator.hideMessages();
                } else {
                    setSubmitStatus('error');
                }
            } catch (error) {
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <div className="volunteer-page">
            <Navbar />
            <PageTitle pageTitle={'Voluntarios'} pagesub={'Voluntarios'} />
            <div className="volunteer-area">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="volunteer-item">
                                    <div className="volunteer-img-wrap">
                                        <div className="volunter-img">
                                            <img src={vImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">
                                        <h2>UNETE A NOSOTROS, Y SE PARTE DEL CAMBIO</h2>
                                        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" id="contact-form-main">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <div className="form-field">
                                                        <input
                                                            value={forms.nombre}
                                                            type="text"
                                                            name="nombre"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            placeholder="Nombre" />
                                                        {validator.message('nombre', forms.nombre, 'required|alpha_space')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <div className="form-field">
                                                        <input
                                                            value={forms.celular}
                                                            type="tel"
                                                            name="celular"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            placeholder="Celular (9 dígitos)"
                                                            maxLength="9"
                                                            pattern="[0-9]{9}" />
                                                        {validator.message('celular', forms.celular, 'required|phone')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <div className="form-field">
                                                        <input
                                                            value={forms.edad}
                                                            type="number"
                                                            name="edad"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            placeholder="Edad" />
                                                        {validator.message('edad', forms.edad, 'required|numeric|min:18,num|max:99,num')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <div className="form-field">
                                                        <input
                                                            value={forms.pueblo}
                                                            type="text"
                                                            name="pueblo"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            placeholder="Nombre de su Pueblo" />
                                                        {validator.message('pueblo', forms.pueblo, 'required')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        value={forms.mensaje}
                                                        type="text"
                                                        name="mensaje"
                                                        placeholder="Mensaje">
                                                    </textarea>
                                                    {validator.message('mensaje', forms.mensaje, 'required')}
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                                    </button>
                                                    <div id="loader">
                                                        <i className="ti-reload"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            {submitStatus === 'success' && (
                                                <div className="success-message" style={{color: 'green', marginTop: '10px', textAlign: 'center'}}>
                                                    ¡Gracias por tu mensaje! Nos contactaremos contigo pronto.
                                                </div>
                                            )}
                                            {submitStatus === 'error' && (
                                                <div className="error-message" style={{color: 'red', marginTop: '10px', textAlign: 'center'}}>
                                                    Ha ocurrido un error al enviar tu mensaje. Por favor, intenta nuevamente.
                                                </div>
                                            )}
                                            <div className="clearfix error-handling-messages">
                                                <div id="success">Gracias por tu mensaje, nos contactaremos contigo pronto.</div>
                                                <div id="error"> Ha ocurrido un error, al enviar tu formulario, intenta otra vez.
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default VolunteerPage;