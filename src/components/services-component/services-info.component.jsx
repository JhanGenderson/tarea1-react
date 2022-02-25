import React from "react";
import "./services.styles.css";

const ServicesInfo = ({ imageSrc, title, description }) => (
  <div className="services-content">
    <figure className="foto-services">
      <img src={imageSrc} alt="" />
    </figure>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ServicesInfo;
