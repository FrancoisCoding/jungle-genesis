import React, { useEffect } from "react";
import "./Navbar.css";
import { BsTwitter } from "react-icons/bs";
import Logo from "../../assets/logo.jpg";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/Connectors";
import { useDispatch } from "react-redux";
import { setOpen, setAddress } from "../../actions";
import Opensea from "../../assets/opensea.svg";

const Navbar = () => {
  const dispatch = useDispatch();

  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      dispatch(setOpen());
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    dispatch(setAddress(account));
  }, [account]);

  return (
    <div className="navbar-container lo-res" id="navbar">
      <img
        src={Logo}
        alt="Jungle Genesis"
        className="navbar-logo"
        onClick={refresh}
      />

      <div className="navbar-buttons">
        <a
          href="https://twitter.com/Jungle_Genesis"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Opensea} alt="Opensea" className="navbar-button opensea" />
        </a>
        <a
          href="https://twitter.com/Jungle_Genesis"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="navbar-button" />
        </a>
        <div className="connect" onClick={connect}>
          {active ? account : "CONNECT"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
