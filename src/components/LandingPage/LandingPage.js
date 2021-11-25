import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LandingPage.css";
import Faq from "react-faq-component";
import Footer from "../Footer/Footer";
import Hero from "../../assets/banner.jpg";
import Slider from "react-slick";
import Lion1 from "../../assets/lion1.jfif";
import Lion2 from "../../assets/lion2.jpg";
import Lion3 from "../../assets/lion3.jpg";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Lion4 from "../../assets/lion4.png";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { setOpen } from "../../actions";

const data = {
  rows: [
    {
      title: "How many Lions are going to be released on launch?",
      content: `7777  (- 7000 Base Lions,  - 770 Genesis,  - 7 "The Sevens")`,
    },
    {
      title: "What wallet is compatible?",
      content: "MetaMask",
    },
    {
      title: "What secondary markets will the collection be listed on?",
      content: `OpenSea`,
    },
    {
      title: "GENESIS?",
      content: `Genesis Holders will earn 10 $COIN/day. At 500 $COIN they are able to breed a Cub.`,
    },
    {
      title: "The Sevens?",
      content: `7 Unique 1-1 variants which will be auctioned off to the highest bidder. You will have the same perks as a Genesis holder as it falls under the Genesis catergory. All ETH from
      this auction will be allocated to the Community wallet.`,
    },
  ],
};

const styles = {
  bgColor: "black",
  rowTitleColor: "white",
  rowContentColor: "rgba(255,255,255,.5)",
  arrowColor: "white",
  rowTitleTextSize: "35px",
  rowContentTextSize: "25px",
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  className: "roadmap-slick",
  arrows: false,
};

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  function getLibrary(provider) {
    return new Web3(provider);
  }

  console.log(state, "STATE");
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Modal
        basic
        onClose={() => dispatch(setOpen())}
        onOpen={() => dispatch(setOpen())}
        open={state.open}
        size="fullscreen"
        centered="false"
      >
        <Modal.Content>
          <div className="mint-modal-content">
            <img src={Lion4} alt="Mint Preview" />
            <h1>0/7777</h1>
            <p>{state.address}</p>
            <div className="mint-btn">MINT</div>
          </div>
        </Modal.Content>
      </Modal>

      <div className="landing-container lo-res">
        <Navbar />

        <div className="landing-hero">
          <img src={Hero} alt="Jungle Genesis Hero" />
        </div>

        <div className="landing-about" id="about">
          <h1>ABOUT</h1>
          <p>
            JungleGenesis is a opportunity for people in the crypto space with
            similar interests and ambitious minds to come together as a pride
            and create a historic project. Rather than just watching it grow,
            you will help shape it into something we all will be proud of. We
            believe a community driven project is good for long term, as not
            only does it benefit everyone it will create a long-lasting bond. We
            want to remove this whole notion about Crypto and NFT's
            specifically, that it's just a "Scam/Ponzi scheme" which the media
            is making it out to be. One of the steps that we will be taking is
            to donate 10% of Presale ETH to a Lion charity chosen by the
            community.
          </p>
        </div>

        <div className="landing-roadmap" id="roadmap">
          <h1>Roadmap</h1>
          <Slider {...settings}>
            <div className="landing-phase">
              <img src={Lion1} alt="Phase 1" />
              <h2>Phase 1</h2>
              <p>
                Elders have access to presale for Genesis (1 mint per wallet)
              </p>
            </div>
            <div className="landing-phase">
              <img src={Lion2} alt="Phase 2" />
              <h2>Phase 2</h2>
              <p>WL presale for Lions/Genesis (2 mint per wallet)</p>
            </div>
            <div className="landing-phase">
              <img src={Lion3} alt="Phase 3" />
              <h2>Phase 3</h2>
              <p>Public sale for Lions/Genesis (2 mint per wallet) </p>
            </div>
          </Slider>
        </div>

        <div className="landing-faq" id="faq">
          <h1>FAQ</h1>
          <Faq data={data} styles={styles} />
        </div>

        <Footer />
      </div>
    </Web3ReactProvider>
  );
};

export default LandingPage;
