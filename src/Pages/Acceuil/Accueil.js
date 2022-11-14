import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import "./Acceuil.css";
import BannerImage from "../../Images/BannerBackground.png";
export default function Home() {
  return (
    <div className="Acceuil">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" img={BannerImage} />
      <Cards />
      <Footer />
    </div>
  );
}
