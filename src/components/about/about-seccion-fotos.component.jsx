import React from "react";
import "./about.styles.css"

import SaladDish from "../../assets/Imagen1.jpg"
import Hamburger from "../../assets/Imagen2.jpg"
import FriedChicken from "../../assets/Imagen3.jpg"

const AboutFotos = () => {
  return (
    
      <section className="seccion-fotos">
        <figure className="foto1">
          <img src={SaladDish} alt="" />
        </figure>
        <figure className="foto2">
          <img src={Hamburger} alt="" />
          <img src={FriedChicken} alt="" />
        </figure>
      </section>
      
   
  );
};

export default AboutFotos;
