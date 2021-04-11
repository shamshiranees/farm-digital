import React, { useState, Fragment } from "react";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

const MyInvestments = ({ projects }) => {
  console.log(projects)
  return (
    <div id="main-wrapper">
      <Header />
      <section className="gray-simple">
        <div className="container">
          <h2>Projects List</h2>
          <Fragment>
            <section className="bg-light">
              <div className="container">
                <div className="row list-layout">
                  {projects && projects.length > 0
                    ? projects.map((project) => (
                    <ProjectCard 
                      project={project}
                    />
                  ))
                  : null}
                </div>
              </div>
            </section>
            <div className="clearfix"></div>
          </Fragment>

        </div>
      </section>
      <Footer />
    </div>
  );
};
MyInvestments.propTypes = {
  projects: PropTypes.array,
}
const mapStateToProps = (state) => ({
  projects: state.profile.projects,
})

export default connect(mapStateToProps,{}) (MyInvestments);
