import React from 'react'
import './enlaces.css'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'
import { Link } from 'react-router-dom'


const Enlaces = () => {
  return (
    <div className='container-enlaces'>
    <div className='container-butons'>
    <Link to={"/"}>
    <BotonesEnlaces text={"Home"}/>
    </Link>
    
    <BotonesEnlaces text={"Buscar"} />
    </div>

      
    </div>
  )
}

export default Enlaces
