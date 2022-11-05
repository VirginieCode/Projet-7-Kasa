import React from "react";
import Header from "../Header/Header";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import LogementFile from  '../Cards/Logement.json';

import "./Logement.css";




export default function Logement() {


  const ID = useParams();

  console.log(ID); // 👉️ {userId: '4200'}
  
  const findLogement = LogementFile.find(
    (leLogement) =>
      leLogement.id === ID
  );
  
  if (findLogement) {
    for (let logement of LogementFile) {
    logement.title = LogementFile.title
    }
  };

  return (
    <div>
   <h2>{findLogement.title}</h2>
   </div>
  )
}
