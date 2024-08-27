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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formEle = document.querySelector("form");
            const dataBase = new FormData(formEle);

            const url = import.meta.env.MODE === 'production'
            ? import.meta.env.VITE_GOOGLE_SCRIPT_URL
            : '/api';
            const response = await fetch(url, {
                method: 'POST',
                body: dataBase
            });
            if (response.ok) {
                setFormData({
                    nombre: '',
                    apellido: '',
                    pais: '',
                    mensaje: '',
                });
            } else {
                throw new Error('Error al enviar los datos');
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
                    id='nombre'
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
                    id='apellido'
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
                    id='pais'
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
                    id='mensaje'
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