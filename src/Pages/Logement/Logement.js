import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Route, Link, Routes, useParams } from "react-router-dom";
import LogementFile from "../../components/Logement Data/Logement.json";
import "../../components/Logement Data/Logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";

import "./Logement.css";

export default function Logement() {
  const ID = useParams();

  console.log(ID);

  const findLogement = LogementFile.find(
    (leLogement) => leLogement.id === ID.id
  );

  console.log(findLogement);

  const lesTags = findLogement.tags;

  const lesEquipements = findLogement.equipments;

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

      <div className="container">
        <Carrousel slides={findLogement.pictures} />

        <div className="titleEThost">
          <h1> {findLogement.title}</h1>
          <div className="host">
            <p>{findLogement.host.name}</p>
            <img src={findLogement.host.picture} img />
          </div>
        </div>

        <p className="location">{findLogement.location}</p>

        <div className="TagETStars">
          <div className="tags">
            {lesTags.map((tag) => (
              <button className="tag">{tag}</button>
            ))}
          </div>

          <div className="Rating">{ratingArray}</div>
        </div>

        <div className="Collapses">
          <Collapse
            title="Description"
            description={findLogement.description}
          />
          
            <Collapse
              className="Equipement"
              title="Equipements"
              description={findLogement.equipments}
            />
          
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
