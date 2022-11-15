import React, { useState, useRef, useEffect } from "react";
import "./Collapse.css";
import Fleche from "../../Images/Fleche.svg";

//Collapse creation

export default function Collapse(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Collapse">
      <div onClick={toggleState} className="Collapse-visible">
        <h1>
          {" "}
          <span>{props.title}</span>
        </h1>
        <img src={Fleche} alt="Arrow directional" />
      </div>
      <div className={toggle ? "Collapse-toggle Animation" : "Collapse-toggle"}>
        <p style={{ color: "#FF6060", textAlign: "left" }}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
