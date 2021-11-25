import React, { useEffect } from "react";
import "./Navbar.css";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.jpg";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/Connectors";
import { useDispatch } from "react-redux";
import { setOpen, setAddress } from "../../actions";

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
      <div className="navbar-links">
        <Link
          className="navbar-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          About
        </Link>
        <Link
          className="navbar-link"
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
        >
          Roadmap
        </Link>
        <Link
          className="navbar-link"
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
        >
          FAQ
        </Link>
      </div>
      <div className="navbar-buttons">
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
