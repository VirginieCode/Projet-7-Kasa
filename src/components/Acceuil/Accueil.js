import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'
import './Acceuil.css'
export default function Home() {
  return (
    <div className="Acceuil">
      <Header />
      <Banner title='Chez vous, partout et ailleurs' />
      <Cards />
    </div>
  )
}
