import React from 'react'
import './categoriasBiblioteca.css'


const CategoriasBiblioteca = ({text}) => {
  return (
    <div className='container-categorias-biblioteca'>
     <h3 className='text-categorias-biblioteca'>{text}</h3>

     </div>
  )
}

export default CategoriasBiblioteca
