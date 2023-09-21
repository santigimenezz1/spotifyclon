import React, { useState } from 'react'
import '../TarjetaAlbum/TarjetaAlbum.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TarjetaAlbum = ({imagen, cancion, artista}) => {
    const [iconOn, setIconOn] = useState(false)
    
  return (
    <div onMouseOver={()=>setIconOn(true)} onMouseOut={()=>setIconOn(false)} className='container-tarjeta-cancion'>
    <div className='container-imagen-tarjeta-cancion'>
    <img className='imagen-tarjeta-cancion' src={imagen}></img>
    </div>
    <div className='container-text'>
    <h2>{cancion}</h2>
    <h4>{artista}</h4>
    </div>
    <div className={iconOn ?'container-icono-play-cancion':'container-icono-play-cancion-off' }>
    <PlayArrowIcon className='icon-play-cancion'/>
    </div>
      
    </div>
  )
}

export default TarjetaAlbum
