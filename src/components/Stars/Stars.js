import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LogementFile from "../Cards/Logement.json";
export default function Stars() {
  const ID = useParams();

  console.log(ID);

  const findLogement = LogementFile.find(
    (leLogement) => leLogement.id === ID.id
  );

  return <div></div>;
}
