import React from 'react'
import '../TarjetaBiblioteca/TarjetaBiblioteca.css'

const TarjetasBilbioteca = ( {imagen, nombreArtista} ) => {
  return (
    <div className='container-tarjeta-biblioteca'>
    <img className='img-tarjeta-biblioteca' src={imagen}></img>
    <div className='text-tarjeta-biblioteca'>
     <span>{nombreArtista}</span>
     <span>Artista</span>
    </div>
      
    </div>
  )
}

export default TarjetasBilbioteca
