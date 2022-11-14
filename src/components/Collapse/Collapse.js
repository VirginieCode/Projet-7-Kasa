import React, { useState, useRef, useEffect } from "react";
import "./Collapse.css";
import Fleche from "../../Images/Fleche.svg";

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
        <img src={Fleche} alt="Fleche directionelle" />
      </div>
      <div
      
        className={toggle ? "Collapse-toggle Animation" : "Collapse-toggle"}
        
      >
     
          
      <p style={{color:'#FF6060'}}>{props.description}</p> 
  
      </div>
    </div>
   
  );
}
