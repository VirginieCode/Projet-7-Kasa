import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Route, Link, Routes, useParams } from "react-router-dom";
import LogementFile from "../Cards/Logement.json";
import "../Cards/Logement.json";
import Collapse from "../Collapse/Collapse";
import Carrousel from "../Carrousel/Carrousel";

import "./Logement.css";

export default function Logement() {
  const ID = useParams();

  console.log(ID);

  const findLogement = LogementFile.find(
    (leLogement) => leLogement.id === ID.id
  );

  findLogement ? console.log(true) : console.log(false);

  console.log(findLogement);

  /*
const length = tags.length;

for (i = 0; i < tags.length; i++) {
  let lesTags = tags[i];

 console.log(lesTags)}

 */

  return (
    <div key={ID}>
      <Header />

      <div className="container">
        <Carrousel slides={findLogement.pictures} />
      </div>

      <div className="titleEThost">
        <h1> {findLogement.title}</h1>
        <div className="host">
          <p>{findLogement.host.name}</p>
          <img src={findLogement.host.picture} img />
        </div>
      </div>

      <p className="location">{findLogement.location}</p>

      <div className="TagETStars">
        <button>{findLogement.tags}</button>
        <p>{findLogement.rating}</p>
      </div>

      <div className="Collapses">
        <Collapse title="Description" description={findLogement.description} />
        <Collapse title="Equipements" description={findLogement.equipments} />
      </div>
    </div>
  );
}
