import React from 'react'
import './Banner.css';
import BannerImage from '../../Images/BannerBackground.png'


export default function Banner() {
  return (
    <div className='Container'>
       <div> <img className='Image' src={BannerImage} alt ="" /> </div>
        <h2 className='Titre'>Chez vous, partout et ailleurs</h2>
    </div>
  )
}
