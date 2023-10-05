import React from 'react'
import '../TarjetaInfo/TarjetaInfo.css'

const TarjetaInfo = ( {data} ) => {

  return (
    <div className='tarjetaInfo'>
    {
      data &&
      <img src={data[0].imagenSecundaria}></img>
    }
    <h1 style={{color:"white"}}>Informacion</h1>
    <div className='tarjeta__info__description'>
    <h1>5.000 oyentes mensuales</h1>
    <h1>askdjaskdjasdkjasdjkasdjkasdjkasjkdaksjdajksdjasdkasjkdjkasdjkasjkdajksdjkasdjkasdjk</h1>
    <h1>askdjaskdjasdkjasdjkasdjkasdjkasjkdaksjdajksdjasdkasjkdjkasdjkasjkdajksdjkasdjkasdjk</h1>
    <h1>askdjaskdjasdkjasdjkasdjkasdjkasjkdaksjdajksdjasdkasjkdjkasdjkasjkdajksdjkasdjkasdjk</h1>
  

    </div>
    </div>
  )
}

export default TarjetaInfo