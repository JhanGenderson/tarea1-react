import React from "react";
import logo from "../../assets/cooking.svg";
import "./header.styles.css";

import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header-home">
      <nav className="main-menu">
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <ul className="menu-desktop">
          <li>
            <Link className="link-menu" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-menu" to="/aboutpage">
              About
            </Link>
          </li>
          <li>
            <Link className="link-menu" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="link-menu" to="/services">
              Services
            </Link>
          </li>

          <li>
            <Link className="link-menu" to="/contact">
              Book Table
            </Link>
          </li>

          <li>
            {currentUser ? (
              <div className="link-menu" onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <Link className="link-menu" onClick={signInWithGoogle}>
                SIGN IN
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
