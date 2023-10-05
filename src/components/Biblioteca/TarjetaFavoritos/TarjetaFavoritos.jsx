import React from 'react'
import { Link } from 'react-router-dom'
import '../TarjetaFavoritos/TarjetaFavoritos.css'

const TarjetasFavoritos = (  ) => {
  return (
    <Link to={`/sectionArtista/favoritos`} className='container-tarjeta-biblioteca'>
    
   
      <>
      <img className='img-tarjeta-biblioteca-favoritos' src={"https://firebasestorage.googleapis.com/v0/b/spotify-3a924.appspot.com/o/Captura.PNG?alt=media&token=415c3a15-8ec5-4bbe-97dc-afee2db09268&_gl=1*7axxn9*_ga*MTE5MzgzMzUwMi4xNjg3ODAzOTY2*_ga_CW55HF8NVT*MTY5NjUyOTQ0OC4xNDUuMS4xNjk2NTI5NDY3LjQxLjAuMA.."}></img>
      <div className='text-tarjeta-biblioteca'>
      <span style={{color:"#1DB954", fontWeight:"600"}}>Canciones que te gustan</span>
      <h4 className='titulo__totalCanciones'>17 canciones</h4>
      </div>
      </>
       
    
    </Link>
  )
  }

export default TarjetasFavoritos