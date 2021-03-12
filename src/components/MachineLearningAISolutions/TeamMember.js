import React from "react";
import { Link } from "gatsby";

import StarIcon from "../../assets/images/star-icon.png";
import Scientist12 from "../../assets/images/scientist/scientist12.jpg";
import Scientist13 from "../../assets/images/scientist/scientist13.jpg";
import Scientist14 from "../../assets/images/scientist/scientist14.jpg";
import Scientist15 from "../../assets/images/scientist/scientist15.jpg";

const TeamMember = () => {
  return (
    <section className="scientist-area pt-100 pb-70">
      <div className="container">
        <div className="section-title"></div>

        <div className="row">
          <div className=" col-4 col-lg-4 col-md-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <ul className="social"></ul>
              </div>
              <div className="content"></div>
            </div>
          </div>

          <div className="col-4 col-lg-4 col-md-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <ul className="social"></ul>
              </div>
              <div className="content"></div>
            </div>
          </div>

          <div className=" col-4 col-lg-4 col-md-6">
            <div className="single-scientist-item-box">
              <div className="image">
                <ul className="social"></ul>
              </div>
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
