import React from 'react'
import NavBar from '../BarreNavigation/NavBar';
import './Header.css';
import Logo from '../../Images/Logo.png';

export default function Header() {
  return (

    
    <div className="Header">
      <img className='Logo' src={Logo} alt ="" /> 
    <nav>< NavBar /></nav> 
    </div>
  )
}
