import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Este campo es obligatorio.',
            alpha_space: 'Solo se permiten letras y espacios.',
            email: 'Ingrese un email válido.',
            phone: 'Ingrese un número de teléfono válido.'
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
                formData.append('name', forms.name);
                formData.append('email', forms.email);
                formData.append('subject', forms.subject);
                formData.append('phone', forms.phone);
                formData.append('message', forms.message);

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
                        name: '',
                        email: '',
                        subject: '',
                        phone: '',
                        message: ''
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
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Tu Nombre" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Tu Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Tu Teléfono" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option value="">Selecciona un tema</option>
                            <option value="Desarrollo de Ríos">Desarrollo de Ríos</option>
                            <option value="Desarrollo de Pueblos">Desarrollo de Pueblos</option>
                            <option value="Desarrollo de Carreteras">Desarrollo de Carreteras</option>
                            <option value="Desarrollo Urbano">Desarrollo Urbano</option>
                            <option value="Desarrollo Social">Desarrollo Social</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Mensaje">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
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
        </form >
    )
}

export default ContactForm;