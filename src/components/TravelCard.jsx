import React from 'react'
import Card from './Card/Card'

const travels = [
    {
        "id": 1,
        "image":"img01.jpg",
        "title": "Free tour nocturno por Madrid",
        "description": "En este free nocturno por Madrid comtemplaremos la iluminación de las principales plazas y monumentos de la capital ¡Una ruta inolvidable por el centro de la ciudad!",
        "score": 9.5,
        "opinions": 1316,
        "travelers": "12 681",
        "price": "gratis",
        "discount": ""
    },
    {
        "id": 2,
        "image":"img02.jpg",
        "title": "Excursión a Toledo y Segovia",
        "description": "En este tour visitaremos en un dia las ciudades más importantes desde Madris, Toledo, Segovia. Si lo deseas podreis, ampliar el recorrido hasta Ávila, famosa por sus murallas",
        "score": 9.2,
        "opinions": 2215,
        "travelers": "20 621",
        "price": "55€",
        "discount": "(-30%)"
    }
]
const TravelCard = () => {
  return (
    <div className="row">
        {travels.map(travel => (
                <Card travel={travel} key={travel.id} />
            ))
        }
  </div>
  )
}

export default TravelCard