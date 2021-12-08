import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const state = useSelector((state) => state.user);
  const [minted, setMinted] = useState(4);

  function getLibrary(provider) {
    return new Web3(provider);
  }

  console.log(state, "STATE");
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="landing-container">
        <Navbar page="main" />

        <div className="landing-content">
          <h1 className="landing-content-title">Centuries Collection</h1>
          <h2 className="landing-content-subtitle">"The Five Families"</h2>
          <h1 className="landing-content-counter">
            <span>{minted}</span>/2000
          </h1>
          <div
            className={
              !state.address
                ? "landing-content-mint disabled-btn"
                : "landing-content-mint"
            }
            disabled={!state.address}
          >
            MINT
          </div>
          <p className="disclaimer">
            Please Connect your Metamask and click 'Mint' to mint.
          </p>
          <p className="disclaimer">
            After a transaction was signed there is no way to refund!
          </p>
        </div>
      </div>
    </Web3ReactProvider>
  );
};

export default LandingPage;
