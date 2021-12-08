import React, { useEffect } from "react";
import "./Navbar.css";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/Connectors";
import { useDispatch } from "react-redux";
import { setAddress } from "../../actions";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  const dispatch = useDispatch();

  const { active, account, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    dispatch(setAddress(account));
  }, [account]);

  return (
    <div className="navbar-container" id="navbar">
      {page === "main" ? (
        <Link to="/about" className="navbar-button">
          About Centuries
        </Link>
      ) : (
        <Link to="/" className="navbar-button">
          Main
        </Link>
      )}

      <div className="navbar-button connect" onClick={connect}>
        {active ? account : "CONNECT"}
      </div>
    </div>
  );
};

export default Navbar;
