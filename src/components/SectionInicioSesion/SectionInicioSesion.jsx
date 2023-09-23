import React from 'react'
import '../SectionInicioSesion/SectionInicioSesion.css'
import { TextField } from '@mui/material'

const SectionInicioSesion = () => {
  return (
    <div className='container__inicioSesion'>
      <div className='container__logo'>
       <img className='logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695392335/E-COMERCE%20CODER/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector_rbr9t6.jpg'></img>
      </div>
      <div className='container__inicioSesion__user'>
      <h1 style={{color:"black"}}>Inicia sesión en spotify</h1>
      <form className='form__user'>
      <TextField id="outlined-basic" label="Email" variant="outlined"  />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      </form>
      </div>
    </div>
  )
}

export default SectionInicioSesion