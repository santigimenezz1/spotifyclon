import React from 'react'
import './enlaces.css'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'


const Enlaces = () => {
  return (
    <div className='container-enlaces'>
    <div className='container-butons'>
    <BotonesEnlaces text={"Home"}/>
    <BotonesEnlaces text={"Buscar"} />
    </div>

      
    </div>
  )
}

export default Enlaces
