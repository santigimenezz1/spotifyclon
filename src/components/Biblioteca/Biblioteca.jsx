import React from 'react'
import '../Biblioteca/biblioteca.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import CategoriasBiblioteca from './CategoriasBiblioteca/CategoriasBiblioteca'
import SearchIcon from '@mui/icons-material/Search';
import TarjetasBilbioteca from '../Tarjetas/TarjetaBiblioteca/TarjetaBilbioteca'
import fonts from 'google-fonts'


const Biblioteca = () => {
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
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Nach"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Nach"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Nach"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Nach"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Nach"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetasBilbioteca nombreArtista={"Cerati"}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />

    </div>




    </div>
  )
}

export default Biblioteca
