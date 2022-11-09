import React from 'react'
import './Erreur404.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


export default function Erreur() {
    const navigate = useNavigate()

    const retourAcceuil = () => {
        navigate("/")
    }
  return (
    <div>
        <Header />
        <h1 className='Erreur'>404</h1>
        <p className='Oups'>Oups! La page que vous demandez n'existe pas.</p>
        <p className='Retour' onClick={retourAcceuil}>Retourner sur la page d'acceuil</p>
        <Footer />
    </div>
  )
}
