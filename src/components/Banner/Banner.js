import React from 'react'
import './Banner.css';
import BannerImage from '../../Images/BannerBackground.png'


export default function Banner() {
  return (
    <div className='Test'>
        <img className='Image' src={BannerImage} alt ="" />
        <h2 className='Titre'>Chez vous, partout et ailleurs</h2>
    </div>
  )
}
