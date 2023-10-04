import React from 'react'
import '../Layout/Layout.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import Biblioteca from '../Biblioteca/Biblioteca'
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum'
import MenuUser from './MenuUser/MenuUser'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom'


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
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"10px"}}>
    <h1 style={{color:"white"}}>¡Buenas noches!</h1>
    <div className='layout__container__tarjetaArtista'>
     <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"Adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
     <TarjetaArtista artista={"Soda estereo"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
     <TarjetaArtista artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
     <TarjetaArtista artista={"Lewis capaldi"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
     <TarjetaArtista artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
    </div>
    </div>
    <div className='layout__container__tarjetaAlbum'>
     <h1 style={{color:"white"}}>Sumérgete de nuevo en tu música</h1>
     <div className='layout__container__tarjetaAlbum__tarjetas'>
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
       <TarjetaAlbum artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
       <TarjetaAlbum artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
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

export default Layout















