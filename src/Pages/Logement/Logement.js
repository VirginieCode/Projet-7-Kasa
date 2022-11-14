import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Route, Link, Routes, useParams } from "react-router-dom";
import LogementFile from "../../components/Logement Data/Logement.json";
import "../../components/Logement Data/Logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";
import "./Logement.css";

import styled from "styled-components";

const CollapseStyleLogement = styled.div`
  width: 85%;
  height: auto;
  margin: 30px auto 0;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export default function Logement() {
  const ID = useParams();

  console.log(ID);

  const findLogement = LogementFile.find(
    (leLogement) => leLogement.id === ID.id
  );

  console.log(findLogement);

  const lesTags = findLogement.tags;

  const lesEquipements = findLogement.equipments;

  const eachEquipement = lesEquipements.map((Equip) => (
    <li style={{ listStyle: "none" }}>{Equip}</li>
  ));

  const starSVGRose = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_26_172)">
        <path
          d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
          fill="#FF6060"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_172">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const starSVGGrise = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_26_172)">
        <path
          d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z"
          fill="#E3E3E3"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_172">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const stars = findLogement.rating;

  const ratingArray = [];

  for (let i = 0; i < stars; i++) {
    ratingArray.push(starSVGRose);
  }

  for (let a = ratingArray.length; a < 5; a++) {
    ratingArray.push(starSVGGrise);
  }

  //faire un if  ratingArrray < 5 pour rajouter etoile manquante et for pour rajouter les etoiles grises

  return (
    <div key={ID}>
      <Header />

      <Carrousel slides={findLogement.pictures} />
      <div className="ContainerLogement">
        <div className="contenuContainer">
          <div className="containerTitreLocationTags">
            <h1 className="TitreLogement"> {findLogement.title}</h1>
            <p className="location">{findLogement.location}</p>
            <div className="tags">
              {lesTags.map((tag) => (
                <button className="tag">{tag}</button>
              ))}
            </div>
          </div>

          <div className="containerHostRating">
            <div className="host">
              <p>{findLogement.host.name}</p>
              <img src={findLogement.host.picture} img />
            </div>
            <div className="rating">{ratingArray}</div>
          </div>
        </div>
      </div>
      <div className="collapsesContainer">
        <div className="Collapses">
          <CollapseStyleLogement>
            <Collapse
              title="Description"
              description={findLogement.description}
            />
          </CollapseStyleLogement>

          <CollapseStyleLogement>
            <Collapse
              className="Equipement"
              title="Equipements"
              description={eachEquipement}
            />
          </CollapseStyleLogement>
        </div>
      </div>

      <Footer />
    </div>
  );
}
