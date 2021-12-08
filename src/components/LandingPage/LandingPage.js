import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import Footer from "../Footer/Footer";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Lion4 from "../../assets/lion4.png";
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import { setCaptcha } from "../../actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  function getLibrary(provider) {
    return new Web3(provider);
  }

  const onChange = () => {
    dispatch(setCaptcha());
  };

  console.log(state, "STATE");
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="landing-container lo-res">
        <Navbar />

        <div className="mint-modal-content">
          <img src={Lion4} alt="Mint Preview" />
          <h1>0/125</h1>
          <p className="disclaimer">*1 Mint Per Wallet</p>
          <p>{state.address}</p>
          <ReCAPTCHA
            sitekey="Y6LdbzGAdAAAAAMtV4ttpkCnj96i5sbupcLD175ph"
            onChange={onChange}
          />
          <div className={state.solvedCaptcha ? "mint-btn" : "disabled-btn"}>
            MINT
          </div>
        </div>

        <Footer />
      </div>
    </Web3ReactProvider>
  );
};

export default LandingPage;
