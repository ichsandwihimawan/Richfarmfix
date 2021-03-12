import React from "react";
import { Link } from "gatsby";
import aboutImage from "../../assets/images/about/about-img5.png";
import starIcon from "../../assets/images/star-icon.png";
import icon4 from "../../assets/images/icons/icon4.png";
import icon5 from "../../assets/images/icons/icon5.png";
import icon6 from "../../assets/images/icons/icon6.png";
import icon7 from "../../assets/images/icons/icon7.png";
import shape1 from "../../assets/images/shape/circle-shape1.png";

const AboutUsContent = () => {
  return (
    <section className="about-area ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={aboutImage} alt="banner" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="content">
                <span className="sub-title">
                  <img src={starIcon} alt="banner" />
                  About Us
                </span>

                <p>
                  {" "}
                  We believe in the future of blockchain in cryptocurrency
                  trading as an asset of the future. so we aspire to optimize
                  industry-wide solutions through innovation for the future
                  current generation and help improve the quality of life
                  through the platform opportunities we build. Rich Farm
                  provides returns on investment that pay off in a transparent,
                  fair and open manner. this commitment is for the good of
                  everyone.
                </p>

                <ul className="features-list">
                  <li>
                    <img src={icon4} alt="banner" />
                    <h3>10 Years</h3>
                    <p>On the market</p>
                  </li>
                  <li>
                    <img src={icon5} alt="banner" />
                    <h3>45+</h3>
                    <p>Team members</p>
                  </li>
                  <li>
                    <img src={icon6} alt="banner" />
                    <h3>100%</h3>
                    <p>Satisfaction rate</p>
                  </li>
                  <li>
                    <img src={icon7} alt="banner" />
                    <h3>80%</h3>
                    <p>Senior scientist</p>
                  </li>
                </ul>

                <Link to="/about-us" className="default-btn">
                  <i className="flaticon-right"></i>More About Us<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-inner-area">
          <div className="row"></div>
        </div>
      </div>

      <div className="circle-shape1">
        <img src={shape1} alt="banner" />
      </div>
    </section>
  );
};

export default AboutUsContent;
