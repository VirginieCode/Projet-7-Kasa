import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import BannerImage from "../../Images/BannerBackground.png";

import style from "styled-components";

const bannerSize = style.div`
  @media only screen and (max-width: 424px) {
    height: 111px;
  }
`

// Home page creation

export default function Home() {
  return (
    <div className="Home">
      <Header />
     <bannerSize> <Banner title="Chez vous, partout et ailleurs" img={BannerImage} /> </bannerSize>
      <Cards />
      <Footer />
    </div>
  );
}
