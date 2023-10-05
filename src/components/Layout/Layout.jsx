import React, { useEffect, useState } from 'react'
import '../Layout/Layout.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import Biblioteca from '../Biblioteca/Biblioteca'
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum'
import MenuUser from './MenuUser/MenuUser'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'


const Layout = () => {
  const [artistas, setArtistas] = useState([])
  useEffect(()=>{
    let artistColection = collection(db, "artistas")
    getDocs(artistColection).then((res)=>{
     let artista = res.docs.map((doc)=>(
        {...doc.data(), id: doc.id}
     ))
     setArtistas(artista)
    })
  },[])













console.log(artistas)

  return (
    <div className='container__general__layout'> 
    <div className='layout'>
    <div className='layout__Enlaces-Biblioteca'>
    <Enlaces />
    <Biblioteca artistas={artistas} />
    
    </div>
    <div className='layout__tarjetasArtistas'>
    <div className='layout__tarjetasArtistas__user'>
     <MenuUser />
    </div>
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"10px"}}>
    <h1 style={{color:"white"}}>¡Buenas noches!</h1>
    <div className='layout__container__tarjetaArtista'>
     <TarjetaArtista artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
     <TarjetaArtista artista={"adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
     <TarjetaArtista artista={"Soda estereo"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
     <TarjetaArtista artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
     <TarjetaArtista artista={"Lewis capaldi"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
     <TarjetaArtista artista={"Intoxicados"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695390549/E-COMERCE%20CODER/ab67616d0000b2733ee9a09c327e80b3f67ac003_p88hcu.jpg"} />
    </div>
    </div>
    <div className='layout__container__tarjetaAlbum'>
     <h1 style={{color:"white"}}>Sumérgete de nuevo en tu música</h1>
     <div className='layout__container__tarjetaAlbum__tarjetas'>
     {
      artistas ? (
        artistas.map((artista)=>(
          <>
          <TarjetaAlbum artista={artista} />
          </>
        ))
      )
      :(
        <h1 style={{color:"red"}}>todavia no llego</h1>
      )
     }
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















