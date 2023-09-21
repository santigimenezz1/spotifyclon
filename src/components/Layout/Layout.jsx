import React from 'react'
import '../Layout/Layout.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import Biblioteca from '../Biblioteca/Biblioteca'
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum'
import MenuUser from './MenuUser/MenuUser'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'

const Layout = () => {
  return (
    <div className='container__general__layout'>
    
    <div className='layout'>
    <div className='layout__Enlaces-Biblioteca'>
    <Enlaces />
    <Biblioteca />
    
    </div>
    <div className='layout__tarjetasArtistas'>
    <div className='layout__tarjetasArtistas__user'>
     <MenuUser />
    </div>
    <h1 style={{color:"white"}}>¡Buenas noches!</h1>
    <div className='layout__container__tarjetaArtista'>
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
    </div>
    <div className='layout__container__tarjetaAlbum'>
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
       <div className='container__reproductor__layout'>
       <HeaderReproductor />
       </div>
       </div>
       </div>
  )
}

export default Layout