import React from "react";
import { Link } from "gatsby";
import starIcon from "../../assets/images/star-icon.png";
import client1 from "../../assets/images/testimonials/client1.jpg";
import client2 from "../../assets/images/testimonials/client2.jpg";
import client3 from "../../assets/images/testimonials/client3.jpg";
import shape from "../../assets/images/shape/shape1.svg";
import Loadable from "@loadable/component";
const OwlCarousel = Loadable(() => import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,

  margin: 30,
  navText: [
    "<i class='flaticon-left-1'></i>",
    "<i class='flaticon-right-1'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="testimonials-area pt-100 bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="testimonial" />
            QUOTE AWESOME
          </span>
          {display ? (
            <div className="single-testimonials-item">
              <h2>"A 1000 MIL JOURNEY STARTING FROM 1 STEP"</h2>
              <br /> <br />
              <Link to="https://richfarm.app/login/" className="default-btn">
                <i className="flaticon-right"></i>
                JOIN US - SIGN UP <span></span>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="testimonials-view-btn text-center"></div>
      </div>
    </div>
  );
};

export default Testimonials;
