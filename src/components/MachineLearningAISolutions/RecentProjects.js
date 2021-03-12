import React from "react";
import { Link } from "gatsby";

import StarIcon from "../../assets/images/star-icon.png";
import ProjectImage1 from "../../assets/images/projects/project1.jpg";
import ProjectImage2 from "../../assets/images/projects/project2.jpg";
import ProjectImage3 from "../../assets/images/projects/project3.jpg";
import ProjectImage4 from "../../assets/images/projects/project4.jpg";
import ProjectImage5 from "../../assets/images/projects/project5.jpg";
import ProjectImage6 from "../../assets/images/projects/project6.jpg";

const RecentProjects = () => {
  return (
    <section className="projects-area bg-color pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={StarIcon} alt="image" />
            OUR RULES WORK
          </span>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box">
              <div className="image">
                <img src={ProjectImage1} alt="Project" />
              </div>

              <div className="content">
                <h3>VISUAL MEDIA CAMPAIGN</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box">
              <div className="image">
                <img src={ProjectImage2} alt="Project" />
              </div>

              <div className="content">
                <h3>GLOBAL END USER SEGMENTATION</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box">
              <div className="image">
                <img src={ProjectImage3} alt="Project" />
              </div>

              <div className="content">
                <h3>DATA ANALYSIS</h3>
                <br />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box">
              <div className="image">
                <img src={ProjectImage4} alt="Project" />
              </div>

              <div className="content">
                <h3>PROJECT SYSTEM SECURITY</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box ">
              <div className="image">
                <img src={ProjectImage5} alt="Project" />
              </div>

              <div className="content">
                <h3>COUNTINEW DATA SERVICE</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-projects-box">
              <div className="image">
                <img src={ProjectImage6} alt="Project" />
              </div>

              <div className="content">
                <h3>OPEN PUBLIC TRANSACTION</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
