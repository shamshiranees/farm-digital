import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { connect } from "react-redux";
// import { Doughnut } from "react-chartjs-2"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useParams } from "react-router-dom";
import CustomizedTimeline from "../../Components/Timeline/Timeline";
const Detail = ({ projects }) => {
  const [rupee, setRupee] = useState(0);
  const { id } = useParams();
  const project = projects.filter((prj) => prj.id === id)[0];
  console.log("------", project);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      labels: {
        render: "percentage",
        fontColor: ["white", "white"],
        precision: 2,
        fontSize: 10,
      },
    },
  };
  let optionVals = [];
  for (let i = 1; i <= parseInt(project.portions); i++) {
    optionVals.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const onChangeUnits = (e) => {
    let temp = 2 * (project.fund / e.target.value);
    setRupee(Math.round(temp));
  };
  const percentage = Math.trunc((project.fund_received / project.fund) * 100);
  return (
    <Fragment>
      <div id="main-wrapper">
        <Header />
        <Banner banners={project.images} />
        <section className="gray-simple">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="property_block_wrap style-2 p-4">
                  <div className="prt-detail-title-desc">
                    <div className="row">
                      <div className="col-12 col-lg-9">
                        <h3>{project.name}</h3>
                        <span>{project.description}</span>
                        <h3 className="prt-price-fix">Fund: {project.fund}</h3>
                        <div className="list-fx-features">
                          <div className="listing-card-info-icon">
                            <div className="inc-fleat-icon">
                              <i class="lni lni-calendar"></i>
                            </div>
                            <strong>Starting Date:&nbsp;</strong>
                            {project.start_date}
                          </div>
                          <div className="listing-card-info-icon">
                            <div className="inc-fleat-icon">
                              <i class="lni lni-calendar"></i>
                            </div>
                            <strong>End Date:&nbsp;</strong>
                            {project.start_date}
                          </div>
                          <div className="listing-card-info-icon">
                            <div className="inc-fleat-icon">
                              <i class="lni lni-pulse"></i>
                            </div>
                            <strong>Funds Recieved:&nbsp;</strong>
                            {project.fund_received}
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-lg-3"
                        style={{ position: "relative" }}
                      >
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}% Fund Received`}
                          styles={buildStyles({
                            textColor: "#0fca98",
                            pathColor: `#0fca98`,
                            textSize: 9,
                          })}
                        />
                        ;{/* <Doughnut data={data}   /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">Details</h4>
                  </div>
                  <div
                    id="clOne"
                    className="panel-collapse collapse show"
                    aria-labelledby="clOne"
                  >
                    <div className="block-body">
                      <ul className="deatil_features">
                        <li>
                          <strong>Location:&nbsp;</strong>
                          {project.location}
                        </li>
                        <li>
                          <strong>Duration:&nbsp;</strong>
                          {project.duration}
                        </li>
                        <li>
                          <strong>Portions:&nbsp;</strong>
                          {project.portions}
                        </li>
                        <li>
                          <strong>Documents:&nbsp;</strong>
                          <br />
                          {project.documents.map((document) => (
                            <Fragment>
                              <Link to={document}>
                                <i class="fas fa-file-download"></i>
                              </Link>
                              &nbsp;&nbsp;
                            </Fragment>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="property_block_wrap style-2">
                  <div className="property_block_wrap_header">
                    <h4 className="property_block_title">Description</h4>
                  </div>
                  <div id="clTwo" className="panel-collapse collapse show">
                    <div className="block-body">
                      <p>{project.detailed_description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="details-sidebar">
                  {project.status !== "fund_awaiting" ? (
                    <div className="sides-widget">
                      <div className="simple-form">
                        <CustomizedTimeline />
                      </div>
                    </div>
                  ) : (
                    <div className="sides-widget">
                      <div className="sides-widget-header">
                        <div className="sides-widget-details">
                          <h4>Invest</h4>
                        </div>
                        <div className="clearfix"></div>
                      </div>

                      <div className="sides-widget-body simple-form">
                        <div className="form-group">
                          <label>Select Units</label>
                          <select
                            className="form-control"
                            onChange={(e) => onChangeUnits(e)}
                          >
                            <option value="">Choose from Options</option>
                            {project.portions && optionVals}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Rupees to Invest</label>
                          <input
                            disabled
                            className="form-control"
                            placeholder="Your Phone"
                            value={rupee}
                          />
                        </div>
                        <button className="btn btn-black btn-md rounded full-width">
                          Invest Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

Detail.propTypes = {
  project: PropTypes.object,
};

const mapStateToProps = (state) => ({
  projects: state.home.projects,
});

export default connect(mapStateToProps, {})(Detail);
