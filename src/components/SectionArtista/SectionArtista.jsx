import React, { useEffect, useState } from 'react'
import '../SectionArtista/SectionArtista.css'
import Enlaces from '../Enlaces/Enlaces/Enlaces'
import Biblioteca from '../Biblioteca/Biblioteca'
import MenuUser from '../layout/MenuUser/MenuUser'
import TarjetaArtista from '../Tarjetas/TarjetaArtista/TarjetaArtista'
import TarjetaAlbum from '../Tarjetas/TarjetaAlbum/TarjetaAlbum'
import HeaderReproductor from '../HeaderReproductor/HeaderReproductor'
import TarjetaArtistaReproductor from './TarjetaArtistaReproductor/TarjetaArtistaReproductor'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import TarjetaCancionArtista from '../Tarjetas/TarjetaCancionArtista/TarjetaCancionArtista'
import Reproductor from '../AudioBoton/AudioBoton'
import TarjetaInfo from './TarjetaInfo/TarjetaInfo'
import { db } from '../../firebaseConfig'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'


const SectionArtista = () => {
  const [data, setData] = useState()
  const { nombreArtista }  = useParams()

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
  }, []);

  
  return (
    <div className='container__general__layout'>
    
    <div className='layout'>
    <div className='layout__Enlaces-Biblioteca'>
    <Enlaces />
    <Biblioteca />
    
    </div>
    <div className='layout__tarjetasArtistas'>
    <div className='container__imagenArtista'>
    {
      data && 
      <img src={data[0].imagenSecundaria}></img>

    }
    <div className='container__titulo__imagenArtista'>
    <h1 style={{color:"white"}} className='titulo__artistaVerificado'>Artista verificado</h1>
    {
      data ?
      <h1 className='titulo__artista__sectionArtista'>{data[0].nombre}</h1>
      
      :
      <h1 className='titulo__artista__sectionArtista'>Pendiente...</h1>
    }
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
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
       <TarjetaAlbum artista={"canserbero"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1687919282/E-COMERCE%20CODER/can_iitrzo.jpg"} />
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

export default SectionArtista