import React from 'react'
import './Footer.css'
import Logo from '../../Images/Logo.png';

export default function Footer() {
  return (
    <div className='Footer'>
         <img className='Logo' src={Logo} alt ="" /> 
        <p className='Copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
  )
}
