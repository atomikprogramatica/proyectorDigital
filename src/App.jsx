import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import SeccionFormatos from './Components/Formatos/Index'
import Home from './Components/Home/Index'

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Navigate to='./proyectorDigital' />} />
      <Route  path='/proyectorDigital' element={<Home />} />
      <Route  path='/proyectorDigital/ver-formatos' element={<SeccionFormatos />} /> 
    </Routes>
  )
}

export default App
