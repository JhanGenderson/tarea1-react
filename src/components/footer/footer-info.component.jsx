import React from "react";
import logo from "../../assets/cooking.svg";
import "./footer.styles.css";

const FooterInfo = () => {
  return (
    <div className="titles-info">
      <figure className="foto-info">
        <img src={logo} alt="" />
      </figure>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ipsum
        reiciendis incidunt in repellat, corporis qui distinctio ab quam facilis
        illum autem eligendi beatae quasi magni inventore rem iure?
        Voluptatibus.
      </p>
    </div>
  );
};

export default FooterInfo;
