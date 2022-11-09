import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Route, Link, Routes, useParams } from "react-router-dom";
import LogementFile from "../../components/Logement Data/Logement.json";
import "../../components/Logement Data/Logement.json";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";

import "./Logement.css";

export default function Logement() {
  const ID = useParams();

  console.log(ID);

  const findLogement = LogementFile.find(
    (leLogement) => leLogement.id === ID.id
  );

  findLogement ? console.log(true) : console.log(false);

  console.log(findLogement);


 

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
        <button>{findLogement.tags}</button>
        <p>{findLogement.rating}</p>
      </div>

      <div className="Collapses">
        <Collapse title="Description" description={findLogement.description} />
        <Collapse title="Equipements" description={findLogement.equipments} />
      </div>
    </div>

    </div>
  );
}
