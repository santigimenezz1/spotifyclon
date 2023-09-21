import React from 'react'
import '../HeaderReproductor/headerReproductor.css'
import Reproductor from '../Reproductor/Reproductor'
import InputSlider from '../SliderVolumen/SliderVolumen'
import TarjetaArtistaReproductor from '../SectionArtista/TarjetaArtistaReproductor/TarjetaArtistaReproductor'

const HeaderReproductor = () => {
  return (
    <div className='container-headerReproductor'>
    <TarjetaArtistaReproductor/>
    <Reproductor  />
    <InputSlider />
      
    </div>
  )
}

export default HeaderReproductor
