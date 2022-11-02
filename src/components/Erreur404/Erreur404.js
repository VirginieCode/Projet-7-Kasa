import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Erreur() {
    const navigate = useNavigate()

    const retourAcceuil = () => {
        navigate("/")
    }
  return (
    <div>
        <h1>Erreur</h1>
        <p onClick={retourAcceuil}>Retourner sur la page d'acceuil</p>
    </div>
  )
}
