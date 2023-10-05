import React from 'react'
import '../TarjetaBiblioteca/TarjetaBiblioteca.css'
import { Link } from 'react-router-dom'

const TarjetasBilbioteca = ( {artista} ) => {
  return (
    <Link to={`/sectionArtista/${artista.nombre}`} className='container-tarjeta-biblioteca'>
    
    {
      artista &&
      <>
      <img className='img-tarjeta-biblioteca' src={artista.imagenPrincipal}></img>
      <div className='text-tarjeta-biblioteca'>
      <span>{artista.nombre}</span>
      </div>
      </>
       
    }
    </Link>
  )
}

export default TarjetasBilbioteca
