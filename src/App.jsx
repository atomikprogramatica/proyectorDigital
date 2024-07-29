import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';
import SeccionFormatos from './Components/Formatos/Index';
import Home from './Components/Home/Index';
import Contacto from './Components/Contacto/Index';
import Tradicionales from './Components/Tradicionales'; // Importa tu componente Tradicionales
import RichMedia from './Components/Richmedia';
import Social from './Components/Social';
import Gaming from './Components/Gaming';
import Video from './Components/Video';
import Audio from './Components/Audio';
import Notification from './Components/Notification';
import TV from './Components/TV';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/proyectorDigital' />} />
        <Route path='/proyectorDigital' element={<Home />} />
        <Route path='/proyectorDigital/contacto' element={<Contacto />} />
        <Route path='/proyectorDigital/ver-formatos' element={<SeccionFormatos />} />
        <Route path='/proyectorDigital/ver-formatos/tradicionales' element={<Tradicionales />} />
        <Route path='/proyectorDigital/ver-formatos/rich-media' element={<RichMedia />} />
        <Route path='/proyectorDigital/ver-formatos/social' element={<Social />} />
        <Route path='/proyectorDigital/ver-formatos/gaming' element={<Gaming />} />
        <Route path='/proyectorDigital/ver-formatos/video' element={<Video />} />
        <Route path='/proyectorDigital/ver-formatos/audio' element={<Audio />} />
        <Route path='/proyectorDigital/ver-formatos/notification-push' element={<Notification />} />
        <Route path='/proyectorDigital/ver-formatos/ctv' element={<TV />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
