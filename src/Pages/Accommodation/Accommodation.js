import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Route, Link, Routes, useParams } from "react-router-dom";
import LogementFile from "../../components/LogementData/Logement.json";
import "../../components/LogementData/Logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";
import "./Accommodation.css";
import ErrorPage from "../Error404/Error404";

import style from "styled-components";

const CollapseStyleLocation = style.div`
  width: 85%;
  height: auto;
  margin: 30px auto 0;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (min-width: 375px) and (max-width: 424px) {
    width: 100%;
  }
`;



export default function Accommodation() {

  // Slot ID retrieval

  const ID = useParams();

  console.log(ID);

// The ID retrieve with useParams needs to match with the accommodation ID.

  const findLogement = LogementFile.find(
    (theLocation) => theLocation.id === ID.id
  );

  //if the ID no match, redirect to error page.

  if (!findLogement) {
    return <ErrorPage />;
  }

// const theTags declaration

  const theTags = findLogement.tags;

  // const theEquipements declaration

  const theEquipements = findLogement.equipments;

  //Map for each equipement

  const eachEquipement = theEquipements.map((Equip) => (
    <li style={{ listStyle: "none" }}>{Equip}</li>
  ));

  // const creation for stars svg

  const starSVGRose = (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  // for loop, for push the good pink and grey stars

  const stars = findLogement.rating;

  const ratingArray = [];

  for (let i = 0; i < stars; i++) {
    ratingArray.push(starSVGRose);
  }

  for (let a = ratingArray.length; a < 5; a++) {
    ratingArray.push(starSVGGrise);
  }

  return (
    <div key={ID}>
      <Header />
      <div className="ContainerContent">
        <Carrousel slides={findLogement.pictures} />
       
          <div className="contenuContainer">
            <div className="containerTitreLocationTags">
              <h1 className="TitreLogement"> {findLogement.title}</h1>
              <p className="location">{findLogement.location}</p>
              <div className="tags">
                {theTags.map((tag) => (
                  <button className="tag" key={tag}>
                    {tag}
                  </button>
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
        <div className="collapsesContainer">
          <div className="Collapses">
            <CollapseStyleLocation>
              <Collapse
                title="Description"
                description={findLogement.description}
              />
            </CollapseStyleLocation>

            <CollapseStyleLocation>
            
              <Collapse
              
                className="Equipement"
                title="Equipements"
                description={eachEquipement}
              />
            </CollapseStyleLocation>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
