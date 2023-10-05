import React, { useEffect, useState } from 'react'
import "../SectionFavoritos/SectionFavoritos.css"

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Biblioteca from '../Biblioteca/Biblioteca';
import Enlaces from '../Enlaces/Enlaces/Enlaces';
import MenuUser from '../layout/MenuUser/MenuUser';
import TarjetaCancionArtista from '../Tarjetas/TarjetaCancionArtista/TarjetaCancionArtista';
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum';
import TarjetaInfo from '../SectionArtista/TarjetaInfo/TarjetaInfo';
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor';



const SectionFavorito = () => {
  const [data, setData] = useState()
  const [artistas, setArtistas] = useState([])
  const { nombreArtista }  = useParams()

  useEffect(()=>{
    let artistColection = collection(db, "artistas")
    getDocs(artistColection).then((res)=>{
     let artista = res.docs.map((doc)=>(
        {...doc.data(), id: doc.id}
     ))
     setArtistas(artista)
    })
  },[])

  useEffect(() => {
    let productsCollection = collection(db, "artistas");
    let consulta = query(productsCollection, where("nombre", "==", nombreArtista))
    let filtrado ;
        getDocs(consulta).then((res) => {
      let artista = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(artista);
     
    });
  }, [nombreArtista]);

  
  return (
    <div className='container__general__layout'>
    
    <div className='layout'>
    <div className='layout__Enlaces-Biblioteca'>
    <Enlaces />
    <Biblioteca artistas={artistas} />
    
    </div>
    <div className='layout__tarjetasArtistas'>
    <div className='container__imagenArtista'>
    {
      data && 
      <img src={data[0].imagenSecundaria}></img>

    }
    <div className='container__titulo__imagenArtista'>
    <h1 style={{color:"white"}} className='titulo__artistaVerificado'>Artista verificado</h1>
      <h1 className='titulo__artista__sectionArtista'>Canciones que te gustan</h1>  
    </div>
    <div className='layout__tarjetasArtistas__userArtista'>
    <NavigateBeforeIcon style={{color:"black"}} fontSize='large' />
     <MenuUser />
    </div>
    </div>
    <div className='container__tarjetaAlbumArtista'>
    
    <div className='container__tarjetasCancionesArtista'>
    <h1 style={{color:"white"}}>Populares</h1>
    {
      data ? (
       <>  
       {
         data[0].canciones.map((cancion)=>(
           <TarjetaCancionArtista cancion={cancion} />
         ))               
       }
      
       </>
       )
       :
       <h1>todavia no llega la peticion </h1>
      }
      </div>

     <h1 style={{color:"white"}}>Sumérgete de nuevo en tu música</h1>
     <div className='layout__container__tarjetaAlbum__tarjetas'>
     {
      artistas ? (
        artistas.map((artista)=>(
          <>
          <TarjetaAlbum artista={artista} />
          </>
        ))
      )
      :(
        <h1 style={{color:"red"}}>todavia no llego</h1>
      )
     }
       </div>
       </div>
       <TarjetaInfo data={data} />
       </div>
       </div>
       <div className='container__reproductor__layout'>
       <HeaderReproductor />
       </div>
       </div>
  )
}

export default SectionFavorito