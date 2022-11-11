import React from "react";
import "./Banner.css";
import BannerImage from "../../Images/BannerBackground.png";

export default function Banner(props) {
  return (
    <div className="Container">
      <div className="Content">
        <h2 className="Titre">
          <span>{props.title}</span>
        </h2>
        <img className="Image" src={props.img} alt="" />
      </div>
    </div>
  );
}
