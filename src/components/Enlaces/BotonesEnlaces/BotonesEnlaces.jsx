import React from 'react'
import '../BotonesEnlaces/botonesEnlaces.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const BotonesEnlaces = () => {
  return (
    <div className='container-botonesEnlaces'>
      <div>
      </div>
      <HomeIcon className='icon-botonesEnlaces' fontSize='large'/>
      <a className='text-botonesEnlaces' href="">Inicio</a> 
    </div>
  )
}

export default BotonesEnlaces
