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
import starsPink from "../../Images/starsRose.svg"
import starsGrey from "../../Images/starsGrey.svg"

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
    (theAccomodation) => theAccomodation.id === ID.id
  );

  

  //if the ID no match, redirect to error page.

  if (!findLogement) {
    return <ErrorPage />;
  }

  // const theTags declaration

  const theTags = findLogement.tags;

  // const theEquipements declaration

  const theEquipements = findLogement.equipments;

  const hostPicture = findLogement.host.picture;

  //Map for each equipement

  const eachEquipement = theEquipements.map((Equip, index) => (
    <li key={index} style={{ listStyle: "none" }}>{Equip} </li>
  ));

  // const creation for stars svg

 

  // for loop, for push the good pink and grey stars

  const stars = findLogement.rating;

  const ratingArray = [];

  for (let i = 0; i < stars; i++) {
    ratingArray.push(<img className="stars" src={starsPink} alt="Pink Stars" />)
  }

  for (let a = ratingArray.length; a < 5; a++) {
    ratingArray.push(<img className="stars" src={starsGrey} alt="Grey Stars" />)
  }

  return (
    <div>
      <Header />
      <div className="ContainerContent">
        <Carrousel slides={findLogement.pictures} />

        <div className="contenuContainer">
          <div className="containerTitreLocationTags">
            { findLogement && <h1 className="TitreLogement"> {findLogement.title}</h1> }
            { findLogement && <p className="location">{findLogement.location}</p>}
              
            <div className="tags">
              {theTags.map((tag,index) => (
                <button key={index} className="tag" >
                 {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="containerHostRating">
            <div className="host" >
            { findLogement &&  <p>{findLogement.host.name}</p> }
            { findLogement &&  <img src={hostPicture} /> }
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
