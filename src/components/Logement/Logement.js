import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import LogementFile from  '../Cards/Logement.json';
import '../Cards/Logement.json';

import "./Logement.css";




export default function Logement() {


  const ID = useParams();

  const LeId = ID;

  console.log(ID); 

 
  const [dataLogement, setDataLogement] = useState();

  useEffect(() => {
    fetch(LogementFile)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data =>{
      console.log(data);
      setDataLogement(data[0].title)
    })
  },[])
  
 /* const findLogement = LogementFile.find(
    (leLogement) =>
      leLogement.id === ID
  );

  console.log(findLogement)

  /*
  
  if (findLogement) {
    for (let logement of LogementFile) {
    logement.title = LogementFile.title
    }
  };

  */
  return (
    <div>
      <Header />
   
  
   </div>
  )
}
