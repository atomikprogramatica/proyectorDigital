import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import SeccionFormatos from './Components/Formatos/Index'
import Home from './Components/Home/Index'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route  path='/ver-formatos' element={<SeccionFormatos />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
