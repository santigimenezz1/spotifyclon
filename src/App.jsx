import './App.css'
import TarjetaCancion from './components/Tarjetas/TarjetaAlbum/TarjetaAlbum'
import TarjetaArtista from './components/Tarjetas/TarjetaArtista/TarjetaArtista'
import Enlaces from './components/Enlaces/Enlaces/Enlaces'
import SectionArtista from './components/SectionArtista/SectionArtista'
import Layout from './components/Layout/Layout'
import SectionInicioSesion from './components/SectionInicioSesion/SectionInicioSesion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/sectionArtista/:artista' element={<SectionArtista />} />

     
    </Routes>
    </BrowserRouter>
   
    
    </div>
    )

}
 
  


export default App
