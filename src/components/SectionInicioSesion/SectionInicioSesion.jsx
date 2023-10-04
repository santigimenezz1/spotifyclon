import React from 'react'
import '../SectionInicioSesion/SectionInicioSesion.css'
import { TextField } from '@mui/material'
import CrearCuenta from './CrearCuenta/CrearCuenta'
import RecuperarContraseña from './RecuperarContraseña/RecuperarContraseña'


const SectionInicioSesion = () => {
  return (
    <div className='container__inicioSesion'>
      <div className='container__logo'>
       <img className='logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1695392335/E-COMERCE%20CODER/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector_rbr9t6.jpg'></img>
      </div>
      <div className='container__inicioSesion__user'>
      <h1 style={{color:"black"}}>Inicio de sesión</h1>
      <form className='form__user'>
      <TextField className='inputs__form' id="outlined-basic" label="Email" variant="outlined"  />
      <TextField className='inputs__form' id="outlined-basic" label="Password" variant="outlined" />
      <button className='button__form'>INICIAR SESIÓN</button>
      <CrearCuenta />
      <RecuperarContraseña />
      </form>
      </div>
    </div>
  )
}

export default SectionInicioSesion