import { useState } from 'react';
import './mainContact.css';

const MainContact = () => {
    const text = {
        titulo : 'Dejanos tus consultas, o escribinos por correo,',
        tituloVioleta : ' te estamos esperando!',
        subtitulo : 'Información de contacto',
        emailTexto : 'info@atomik.pro',
        nombreFormulario : 'Nombre',
        apellidoFormulario : 'Apellido',
        paisFormulario : 'País',
        mensajeFormulario : 'Dejanos tu mensaje:',
        botonFormulario : 'Enviar'
    }

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        pais: '',
        mensaje: '',
    })


    // ESTA LOGICA ES CON LA BIBLIOTECA RESEND
    const API_KEY = import.meta.env.VITE_RESEND_API_KEY

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nombre, apellido, pais, mensaje } = formData;
        const htmlContent = `
            <strong>Solicitud desde Proyector Digital recibida</strong> <br />
            <strong>Nombre:</strong> ${nombre} <br/>
            <strong>Apellido:</strong> ${apellido} <br/>
            <strong>País:</strong> ${pais} <br/>
            <strong>Mensaje:</strong> ${mensaje} <br />
            <p> Recuerda ponerte en contacto para aprovechar esta oportunidad! </p>
        `;

        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'Proyector Digital <onboarding@resend.dev>',
                    to: ['andy@atomik.pro'],
                    subject: 'Consulta desde formulario',
                    html: htmlContent
                })
            });
    
            const data = await response.json();
            if (!response.ok) {
                console.error(data);
            } else {
                console.log(data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className='main-contact-container'>
        <div className='contenedor-textos'>
            <p>{text.titulo}
                <span>{text.tituloVioleta}</span>
            </p>
            <div className='contenedor-textos-inferior'>
                <p>{text.subtitulo}</p>
                <p>{text.emailTexto}</p>     
            </div>
        </div>
        <form id='form' className='formulario' onSubmit={handleSubmit}>
            <label className='label-nombre-apellido'>
                <div>
                    <p>{text.nombreFormulario}</p>
                    <input 
                    type='text'
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder='Maria' 
                    className='inputs-formulario'/>
                </div>
                <div>
                    <p>{text.apellidoFormulario}</p>
                    <input 
                    type='text'
                    name='apellido'
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder='Pérez' 
                    className='inputs-formulario'/>
                </div>
            </label>
            <label className='label-pais'>
                <div>
                    <p>{text.paisFormulario}</p>
                    <input 
                    type='text'
                    name='pais'
                    value={formData.pais}
                    onChange={handleInputChange}
                    placeholder='Uruguay' 
                    className='input-pais'/>
                </div>
            </label>
            <label className='label-mensaje'>
                <div>
                    <p>{text.mensajeFormulario}</p>
                    <textarea 
                    type='text'
                    name='mensaje'
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder='Buen día, me comunicaba para consultar sobre...' 
                    className='input-mensaje'/>
                </div>
            </label>        
            <button type='submit' className='boton-enviar'>{text.botonFormulario}</button>
        </form>
    </div>
  )
}

export default MainContact;