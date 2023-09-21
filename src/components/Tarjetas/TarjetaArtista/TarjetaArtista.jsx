import React, { useState } from 'react'
import './tarjetaArtista.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Reproductor from '../../AudioBoton/AudioBoton';

const TarjetaArtista = ( {imagen, artista} ) => {

    const [iconPlay, setIconPlay] = useState(false)

  return (
    <div onMouseOver={()=>setIconPlay(true)} onMouseOut={()=>setIconPlay(false)} className='container-tarjeta-artista'>

    <img className='imagen-tarjeta-artista' src={imagen}></img>
    <span className='titulo-tarjeta-artista'>{artista}</span>
    <div className={iconPlay ?'container-icono-play':"container-icono-play-off"} >
    <Reproductor/>
    </div>

    </div>
  )
}

export default TarjetaArtista
