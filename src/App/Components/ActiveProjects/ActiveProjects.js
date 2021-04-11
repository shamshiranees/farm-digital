import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import ProjectCard from "../ProjectCard/ProjectCard"

const ActiveProjects = ({ projects }) => {
  //console.log(projects)
  return (
    <Fragment>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Active Projects</h2>
                <p>
                  Initial payment has been released and cultivation started.
                </p>
              </div>
            </div>
          </div>

          <div className="row list-layout">
            {projects && projects.length > 0
              ? projects.map((project) => <ProjectCard project={project} />)
              : null}
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </Fragment>
  )
}

ActiveProjects.propTypes = {
  projects: PropTypes.array,
}

const mapStateToProps = (state) => ({
  projects: state.home.projects,
})

export default connect(mapStateToProps, {})(ActiveProjects)
