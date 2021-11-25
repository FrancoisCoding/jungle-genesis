import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import Footer from "../Footer/Footer";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Lion4 from "../../assets/lion4.png";
import { useDispatch, useSelector } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  function getLibrary(provider) {
    return new Web3(provider);
  }

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
          <div className="mint-btn">MINT</div>
        </div>

        <Footer />
      </div>
    </Web3ReactProvider>
  );
};

export default LandingPage;
