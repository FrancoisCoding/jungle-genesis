import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AboutPage.css";
import Main1 from "../../assets/main1.jpeg";
import Main2 from "../../assets/main2.jpg";
import Main3 from "../../assets/main3.jpg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Navbar page="about" />

      <div className="about-content">
        <h1 className="about-content-title">About Centuries</h1>
        <h2 className="about-content-subtitle">Centuries Collective</h2>

        <div className="about-images">
          <h2 className="about-images-title">"The Five Families"</h2>
          <div className="about-images-cards">
            <div className="about-images-card">
              <img src={Main3} alt="John Gotti" />
              <h1 className="about-images-card-title">John Gotti</h1>
            </div>
            <div className="about-images-card">
              <img src={Main1} alt="Vito Genovese" />
              <h1 className="about-images-card-title">Vito Genovese</h1>
            </div>
            <div className="about-images-card">
              <img src={Main2} alt="Meyer Lansky" />
              <h1 className="about-images-card-title">Meyer Lansky</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
