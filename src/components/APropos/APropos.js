import React from 'react'
import Collapse from '../Collapse/Collapse'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import BannerImage from '../../Images/BannerAPropos.png'

export default function About() {
  return (
    <div>
    <Header />
    <Banner img={BannerImage}/>
    <Collapse title='Fiabilité' />
    <Collapse title='Respect' />
    <Collapse title='Service' />
    <Collapse title='Responsabilité' />
    <Footer />
    </div>
  )
}
