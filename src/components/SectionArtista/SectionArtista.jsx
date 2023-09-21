import React from 'react'
import '../SectionArtista/SectionArtista.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import Biblioteca from '../Biblioteca/Biblioteca'
import MenuUser from '../layout/MenuUser/MenuUser'
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'
import TarjetaArtistaReproductor from './TarjetaArtistaReproductor/TarjetaArtistaReproductor'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const SectionArtista = () => {
  return (
    <div className='container__general__layout'>
    
    <div className='layout'>
    <div className='layout__Enlaces-Biblioteca'>
    <Enlaces />
    <Biblioteca />
    
    </div>
    <div className='layout__tarjetasArtistas'>
    <div className='container__imagenArtista'>
    <div className='layout__tarjetasArtistas__userArtista'>
    <NavigateBeforeIcon style={{color:"black"}} fontSize='large' />
     <MenuUser />
    </div>
    <div className='container__titulo__imagenArtista'>
    <h1 style={{color:"white"}} className='titulo__artistaVerificado'>Artista verificado</h1>
    <h1 className='titulo__artista__sectionArtista'>Canserbero</h1>
    </div>
    </div>
    <div className='container__tarjetaAlbumArtista'>
     <h1 style={{color:"white"}}>Sumérgete de nuevo en tu música</h1>
     <div className='layout__container__tarjetaAlbum__tarjetas'>
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       </div>
       </div>
       </div>
       </div>
       <div className='container__reproductor__layout'>
       <HeaderReproductor />
       </div>
       </div>
  )
}

export default SectionArtista