import React, { useState } from 'react'
import '../TarjetaAlbum/TarjetaAlbum.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

const TarjetaAlbum = ( {artista} ) => {
    const [iconOn, setIconOn] = useState(false)
    
  return (
    <Link style={{textDecoration:"none"}} to={`/sectionArtista/${artista.nombre}`}>
    <div onMouseOver={()=>setIconOn(true)} onMouseOut={()=>setIconOn(false)} className='container-tarjeta-cancion'>
    
    <div className='container-imagen-tarjeta-cancion'>
    {
      artista &&
      <img className='imagen-tarjeta-cancion' src={artista.imagenPrincipal}></img>
    }
    </div>
    <div className='container-text'>
    {
      artista &&
      <h2>Artista</h2>
    }
    {
      artista &&
      <h4>{artista.nombre}</h4>
    }
    </div>
    <div className={iconOn ?'container-icono-play-cancion':'container-icono-play-cancion-off' }>
    <PlayArrowIcon className='icon-play-cancion'/>
    </div>
      
    </div>
    </Link>
  )
}

export default TarjetaAlbum
