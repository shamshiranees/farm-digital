import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { connect } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

const Profile = ({ projects }) => {
 
  return (
    <div id="main-wrapper">
        <Header />
        <section className="gray-simple">
          <div className="container">
            <Fragment>
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-10 ">
                 <div className="property_block_wrap style-2 p-4">
                  <div className="prt-detail-title-desc"></div>
                    <div className="row">
                      <h4 className="property_block_title">
                        Profile
                      </h4>
                      <div className="block-body">
                        <ul className="deatil_features">
                          <li>
                            <strong>Name:</strong>{projects.name}
                          </li>
                          </ul>
                          <ul className="deatil_features">
                            <li>
                              <strong>Address:</strong>{projects.location}
                            </li>
                          </ul>
                          <ul className="deatil_features">
                            <li>
                              <strong>Mobile Number:</strong>{projects.phone}
                            </li>
                          </ul>
                          <ul>
                            <Link to={`/myinvestments`}>
                              <Button className="btn btn-black btn-md rounded full-width">
                                <p> View Invested Projects</p>
                              </Button>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </Fragment>
            </div>
          </section>
        <Footer />
    </div>
  );
};

Profile.propTypes = {
  project: PropTypes.object,
};

const mapStateToProps = (state) => ({
  projects: state.profile.projects,
});

export default connect(mapStateToProps, {})(Profile);
