import React, { useState } from 'react'
import '../TarjetaCancionArtista/TarjetaCancionArtista.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Reproductor from '../../AudioBoton/AudioBoton';

const TarjetaCancionArtista = ( {cancion} ) => {
  const [heart, setHeart] = useState(false)
  return (
    <div className='TarjetaCancionArtista'>
    <div className='tarjetaCancionArtista__logoTitulo'>
    <div className='button__reproductor'>
    <Reproductor  cancion={cancion} />
    </div>
      <h1>1</h1>
      <img className='tarjetaCancionArtista__imagen' src={cancion.imagen}></img>
      <h1>{cancion.nombre}</h1>
    </div>
    <div className='tarjetaCancionArtista__tiempoHeart'>
    
   
    {
      
      !heart 
      ? 
      <div style={{cursor:"pointer"}} onClick={()=>setHeart(!heart)}>
      <FavoriteBorderIcon  style={{color:"white"}} /> 
      </div>
      : 
      <div style={{cursor:"pointer"}} onClick={()=>setHeart(!heart)}>
      <FavoriteIcon color="error"/>
      </div>
    

    }
    
    <h1>4:14</h1>
    </div>
      
    </div>
  )
}

export default TarjetaCancionArtista