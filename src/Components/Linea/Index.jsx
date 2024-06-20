import './linea.css';

const Linea = () => {
  return (
    <div>
        <svg className='linea-container' xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h3l-4-4l-4 4h3v12h-3l4 4l4-4h-3zM9 3.09c2.83.48 5 2.95 5 5.91H9zM14 11v4c0 3.3-2.7 6-6 6s-6-2.7-6-6v-4zM7 9H2c0-2.96 2.17-5.43 5-5.91z"/></svg>
        <span className='linea-scroll'>
            <span className='redondel-scroll'></span>
        </span>
    </div>
  )
}

export default Linea