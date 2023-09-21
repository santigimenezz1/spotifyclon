import React from 'react'
import '../Reproductor/reproductor.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import SliderSizes from '../Slider-reproductor/Slider';


const Reproductor = () => {
  return (
    <div className='container-reproductor'>
    <div className='butons-reproductor'>
    <FastRewindIcon  className='button-downAp' fontSize='large'/>
      <PlayArrowIcon className='button-play-reproductor' fontSize='large'/>
      <FastForwardIcon className='button-downAp' fontSize='large'/>
    </div>
      <SliderSizes/>
    </div>
  )
}

export default Reproductor
