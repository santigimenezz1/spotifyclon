import React, { useState, useRef } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import '../AudioBoton/audioBoton.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Reproductor() {
  const audioRef = useRef(null);
  const [botonOn,setBotonOn] = useState(true)

  const reproducirCancion = () => {
    audioRef.current.play();
    setBotonOn(!botonOn)
  };
  const pausarCancion = () => {
    audioRef.current.pause();
    setBotonOn(!botonOn)
  };

  return (
    <div className='container-buttons-reproductor'>
      <audio ref={audioRef} src="https://res.cloudinary.com/dcf9eqqgt/video/upload/v1688168252/E-COMERCE%20CODER/y2mate.com_-_Tal_Como_Eres_jcuatv.mp3" />
      <div className='container-boton'>
      <PauseIcon className='icono-reproductor' onClick={pausarCancion} />
      </div>
      <div className={botonOn ?'container-boton':"container-boton-off"}>
      <PlayArrowIcon className='container-icono-reproductor'  onClick={reproducirCancion} />
      </div>
    </div>
  );
}

export default Reproductor;