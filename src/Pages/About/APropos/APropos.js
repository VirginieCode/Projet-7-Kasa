import React from "react";
import Collapse from "../../../components/Collapse/Collapse";
import Header from "../../../components/Header/Header";
import Banner from "../../../components/Banner/Banner";
import Footer from "../../../components/Footer/Footer";
import BannerImage from "../../../Images/BannerAPropos.png";
import "./APropos.css";

export default function About() {
  return (
    <div>
      <Header />
      <Banner img={BannerImage} />
      <div className="Container">
        <Collapse
          title="Fiabilité"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Responsabilité"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        />
        <Footer />
      </div>
    </div>
  );
}
