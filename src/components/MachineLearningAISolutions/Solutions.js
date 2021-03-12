import React from "react";
import { Link } from "gatsby";

import StarIcon from "../../assets/images/star-icon.png";

const Solutions = () => {
  return (
    <section className="solutions-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>OUR ECOSYSTEM</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-rocket"></i>
              </div>
              <br />
              <h3>Stake</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-laptop"></i>
              </div>
              <h3>Artifical Intelligence Trading</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 offset-lg-0 offset-sm-3 offset-md-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-money"></i>
              </div>
              <h3>Farming Data Mining Industry</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
