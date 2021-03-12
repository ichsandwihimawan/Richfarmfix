import React from "react";
import { Link } from "gatsby";
import ModalVideo from "react-modal-video";

import AboutImg from "../../assets/images/about/about-img9.jpg";
import StarIcon from "../../assets/images/star-icon.png";
import Icon4 from "../../assets/images/icons/icon4.png";
import Icon5 from "../../assets/images/icons/icon5.png";
import CircleShape1 from "../../assets/images/shape/circle-shape1.png";

const AboutUs = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />

      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-box">
                <img src={AboutImg} alt="AboutImg" />

                <div className="box"></div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={StarIcon} alt="StarIcon" />
                    About Us
                  </span>
                  <p>
                    We believe in the future of blockchain in cryptocurrency
                    trading as an asset of the future. so we aspire to optimize
                    industry-wide solutions through innovation for the future
                    current generation and help improve the quality of life
                    through the platform opportunities we build. Rich Farm
                    provides returns on investment that pay off in a
                    transparent, fair and open manner. this commitment is for
                    the good of everyone.
                  </p>

                  <ul className="features-list">
                  <Link to="/about-us" className="default-btn">
                    <i className="flaticon-right"></i>
                    More About Us <span></span>
                  </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={CircleShape1} alt="CircleShape" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
