import React from "react";
import logo from "../../../assets/img/logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const userVal = useSelector(({ authReducer }) => authReducer.user);

  return (
    <div id="main-wrapper">
      <div className="header header-light head-shadow">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand" href="/">
                <img src={logo} className="logo" alt="" />
              </a>
              <div className="nav-toggle"></div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li className="active">
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a className="active" href="index.html">
                        Home Layout 1
                      </a>
                    </li>
                    <li>
                      <a href="home-2.html">Home Layout 2</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home Layout 3</a>
                    </li>
                    <li>
                      <a href="home-4.html">Home Layout 4</a>
                    </li>
                    <li>
                      <a href="home-5.html">Home Layout 5</a>
                    </li>
                    <li>
                      <a href="home-6.html">Home Layout 6</a>
                    </li>
                    <li>
                      <a href="home-7.html">Home Layout 7</a>
                    </li>
                    <li>
                      <a href="home-8.html">Home Layout 8</a>
                    </li>
                    <li>
                      <a href="map.html">Map Home Layout</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {!userVal.email && (
                <ul className="nav-menu nav-menu-social align-to-right">
                  <li className="add-listing">
                    <a href="/login" data-bs-toggle="modal" data-bs-target="#">
                      <img
                        src="assets/img/user-light.svg"
                        width="12"
                        alt=""
                        className="mr-2"
                      />
                      Sign In
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
