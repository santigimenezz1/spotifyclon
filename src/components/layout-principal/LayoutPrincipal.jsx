import React from 'react'
import "../layout-principal/layoutPrincipal.css"
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import FlexTarjetaCancion from '../FlexTarjetasCancion/FlexTarjetaCancion'
import SectionTarjetas from '../SectionTarjetas/SectionTarjetas'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'
import Biblioteca from '../Biblioteca/Biblioteca'
const LayoutPrincipal = () => {
  return (
   <div className='container-layout'>
   <div className='container-enlaces-biblioteca'>
   <Enlaces />
   <Biblioteca />
   </div>
    <SectionTarjetas />
    <HeaderReproductor />

    </div>
  )
}

export default LayoutPrincipal
