import React from 'react'
import '../Biblioteca/biblioteca.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import CategoriasBiblioteca from './CategoriasBiblioteca/CategoriasBiblioteca'
import SearchIcon from '@mui/icons-material/Search';
import TarjetasBilbioteca from '../Tarjetas/TarjetaBiblioteca/TarjetaBilbioteca'
import fonts from 'google-fonts'
import TarjetasFavoritos from './TarjetaFavoritos/TarjetaFavoritos';


const Biblioteca = ( {artistas} ) => {
  return (

    <div className='container-biblioteca'>
      <div className='cointainer-enlaces-categorias'>
      <div className='enlace'>
      <h1 className='titulo__bibliteca'>Tu biblioteca</h1>
      </div>
      <div className='categorias'>
      <CategoriasBiblioteca text={"Listas"} />
      <CategoriasBiblioteca text={"Artistas"} />
      </div>
      </div>

    <div className='tarjetas'>
    <TarjetasFavoritos />
      
    {
      artistas && 
      artistas.map((artista)=>(
      <TarjetasBilbioteca key={artista.id} artista={artista} />
      ))
    }
  </div>




    </div>
  )
}

export default Biblioteca
