import './App.css'
import TarjetaCancion from './components/Tarjetas/TarjetaAlbum/TarjetaAlbum'
import TarjetaArtista from './components/Tarjetas/TarjetaArtista/TarjetaArtista'
import Enlaces from './components/Enlaces/Enlaces/Enlaces'
import SectionArtista from './components/SectionArtista/SectionArtista'
import Layout from './components/Layout/Layout'
import SectionInicioSesion from './components/SectionInicioSesion/SectionInicioSesion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/sectionArtista/:nombreArtista' element={<SectionArtista />} />
    <Route path='/dashboard' element={<DashBoard />} />


     
    </Routes>
    </BrowserRouter>
   
    
    </div>
    )

}
 
  


export default App
