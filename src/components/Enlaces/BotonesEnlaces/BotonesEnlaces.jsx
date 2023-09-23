import React from 'react'
import '../BotonesEnlaces/botonesEnlaces.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const BotonesEnlaces = ({text}) => {
  return (
    <div className='container-botonesEnlaces'>
      <div>
      </div>
      <HomeIcon className='icon-botonesEnlaces' fontSize='large'/>
      <a className='text-botonesEnlaces' href="">{text}</a> 
    </div>
  )
}

export default BotonesEnlaces
