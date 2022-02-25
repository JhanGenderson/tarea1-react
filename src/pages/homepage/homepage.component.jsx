import React from "react";
import "./homepage.styles.css";
import TextoHomePage from "../../components/texto-home-page/texto-home-page.component";
import FooterPage from "../../components/footer/footer-page.component";
import FooterCopyright from "../../components/footer/footer-copyright.component";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <TextoHomePage />
      </div>
      <FooterPage />
      <FooterCopyright />
    </div>
  );
};

export default HomePage;
