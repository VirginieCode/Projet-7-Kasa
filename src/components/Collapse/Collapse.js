import React, {useState, useRef, useEffect} from "react";
import "./Collapse.css";
import Fleche from "../../Images/Fleche.svg";

export default function Collapse(props) {

    const[toggle, setToggle] = useState(false);

    const [heightEl, setHeightEl] = useState();
    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
    
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);
    
  return (
    <div className="Collapse">
      <div onClick={toggleState} className="Collapse-visible">
        <h1> <span>{props.title}</span> </h1>
        <img src={Fleche} alt="Fleche directionelle" />
      </div>
      <div ref={refHeight}
      className={toggle ? "Collapse-toggle Animation" : 'Collapse-toggle'}
      style={{height: toggle ? `${heightEl}`: "0px"}}
      >
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
