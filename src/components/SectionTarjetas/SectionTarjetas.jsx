import React from 'react'
import "../SectionTarjetas/sectionTarjetas.css"
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import FlexTarjetaCancion from '../FlexTarjetasCancion/FlexTarjetaCancion'
const SectionTarjetas = () => {
  return (
    <div className='container-sectionTarjetas'>
    
    
    <div className='container-tarjetas-artistas'>

    <div className='text-section'>
    <h1 className='text-sectionTarjetas'>Buenas tardes</h1>
    </div>

    <div className='targets'>
    <TarjetaArtista artista={"Canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
    <TarjetaArtista artista={"Adele"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687920208/E-COMERCE%20CODER/adele_q2holr.jpg"} />
    <TarjetaArtista artista={"Soda estereo"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131470/E-COMERCE%20CODER/soda_vy82yb.jpg"} />
    <TarjetaArtista artista={"Nach"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131478/E-COMERCE%20CODER/nach_jmet71.jpg"} />
    <TarjetaArtista artista={"Lewis capaldi"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131578/E-COMERCE%20CODER/lw_nndnmq.jpg"} />
    <TarjetaArtista artista={"Greenday"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688131588/gd_kzefpj.jpg"} />
    </div>

    </div>
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
      <FlexTarjetaCancion />
    </div>
  )
}

export default SectionTarjetas
