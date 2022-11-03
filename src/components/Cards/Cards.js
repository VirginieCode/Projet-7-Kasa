import React from 'react'
import './Cards.css'
import Logement from './Logement.json'

export default function Cards() {
  return (
    <div className='Container'> 

    <div className='Background'>

    {
      Logement.map( Logement => {
        return (
          <div className='box' key={Logement.id}>
            <p className='Title'>{Logement.title}</p>
            <img className='Cover' src={Logement.cover} />
          </div>
        )
      }
      )
    }

    </div>  

    </div>
   
  )
}
