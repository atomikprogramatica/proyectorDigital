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
        <form id='form' className='formulario'>
            <label className='label-nombre-apellido'>
                <div>
                    <p>{text.nombreFormulario}</p>
                    <input 
                    type='text'
                    placeholder='Maria' 
                    className='inputs-formulario'/>
                </div>
                <div>
                    <p>{text.apellidoFormulario}</p>
                    <input 
                    type='text'
                    placeholder='Pérez' 
                    className='inputs-formulario'/>
                </div>
            </label>
            <label className='label-pais'>
                <div>
                    <p>{text.paisFormulario}</p>
                    <input 
                    type='text'
                    placeholder='Uruguay' 
                    className='input-pais'/>
                </div>
            </label>
            <label className='label-mensaje'>
                <div>
                    <p>{text.mensajeFormulario}</p>
                    <textarea 
                    type='text'
                    placeholder='Buen día, me comunicaba para consultar sobre...' 
                    className='input-mensaje'/>
                </div>
            </label>        
            <button className='boton-enviar'>{text.botonFormulario}</button>
        </form>
    </div>
  )
}

export default MainContact