import React from 'react'
import '../TarjetaArtistaReproductor/tarjetaArtistaReproductor.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const TarjetaArtistaReproductor = () => {
  return (
    <div className='container-tarjetaReproductor'>
    <img className='image-tarjetaReproductor' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg'></img>
    <div className='cointainer-text-tarjetaReproductor'>
     <span className='text-tarjetaReproductor'>Nombre cancion</span>
     <span className='text-tarjetaReproductor'>Artista</span>
    </div>
    <FavoriteBorderIcon className='icon-tarjetaReproductor' />

    </div>
  )
}

export default TarjetaArtistaReproductor
