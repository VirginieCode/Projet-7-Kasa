import React from 'react'
import './Cards.css'
import Logement from '../Logement Data/Logement.json'
import Footer from '../Footer/Footer'

export default function Cards() {
  return (
    <div className='Container'> 

    <div className='Background'>

    {
      Logement.map( Logement => {
        return (
          <a href={`/Logement/${Logement.id}`} >
          <div className='box' key={Logement.id}>
           <div className='box-content'> <p className='Title'>{Logement.title}</p> </div>
            <img className='Cover' src={Logement.cover} />
          </div>
          </a>
        )
      }
      )
    }
  <Footer />
    </div>  
  
    </div>
   
   
  )
}
