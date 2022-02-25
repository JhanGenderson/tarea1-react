import React from "react";
import FooterInfo from "./footer-info.component";
import FooterContact from "./footer-contact.component";
import FooterSuscribe from "./footer-suscribe.component";

const FooterPage = () => {
  return (
    <div className="info">
      <FooterInfo />
      <FooterContact />
      <FooterSuscribe />
    </div>
  );
};

export default FooterPage;
