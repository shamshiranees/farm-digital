import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

   
const ProjectCard = ({project}) => {
  const { name, duration,start_date,images, fund, fund_received , id ,status,minimum_fund_required,location,crop} = project
  return (
    <div className="col-lg-6 col-md-12">
      <div className="property-listing property-1">
        <div className="listing-img-wrapper">
          <a href="single-property-2.html">
            <img src={images[0]} className="img-fluid mx-auto" alt="" />
          </a>
        </div>

        <div className="listing-content">
          <div className="listing-detail-wrapper-box">
            <div className="listing-detail-wrapper">
              <div className="listing-short-detail">
                <h4 className="listing-name">
                  <Link to={`/detail/${id}`}>{name}</Link>
                </h4>
                <span className="prt-types sale">{status}</span>
              </div>
              <div className="list-price">
                <h6 className="listing-card-info-price">Fund Raised: {fund_received}</h6>
              </div>
            </div>
          </div>
<div className={"project-cart-p"}>Amount Required: {fund} </div>
<div className={"project-cart-p"}>Starting Date: {start_date} </div>

{/* <div className={"project-cart-p"}>Duration: {duration} months </div> */}
<div className={"project-cart-p"}>Location: {location} </div>


          {/* <div className="price-features-wrapper">
            <div className="list-fx-features">
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <i class="lni lni-invest-monitor"></i>
                </div>
                {fundReceived}
              </div>
            </div>
          </div> */}

          <div className="listing-footer-wrapper">
            <div className="listing-detail-btn">
              <Link to={`/detail/${id}`} className="more-btn">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  fund: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectCard;
