import React, { useState, useRef } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import '../AudioBoton/audioBoton.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Reproductor( {cancion} ) {
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
    {
      cancion &&
      <audio ref={audioRef} src={cancion.url} />
    }
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