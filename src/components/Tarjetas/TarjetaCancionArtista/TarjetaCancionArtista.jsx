import React from 'react'
import '../TarjetaCancionArtista/TarjetaCancionArtista.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TarjetaCancionArtista = () => {
  return (
    <div className='TarjetaCancionArtista'>
    <div className='tarjetaCancionArtista__logoTitulo'>
      <h1>1</h1>
      <img className='tarjetaCancionArtista__imagen' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg'></img>
      <h1>Tal como eres</h1>
    </div>
    <div className='tarjetaCancionArtista__tiempoHeart'>
    <FavoriteBorderIcon style={{color:"white"}} />
    <h1>4:14</h1>
    </div>
      
    </div>
  )
}

export default TarjetaCancionArtista