import React from "react";
import ModalVideo from "react-modal-video";
import { Link } from "gatsby";
import Loadable from "@loadable/component";
import StarBanner from "../../assets/images/main-banner/main-banner3.jpg";

const OwlCarousel = Loadable(() => import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='flaticon-left-1'></i>",
    "<i class='flaticon-right-1'></i>",
  ],
};

const MainBanner = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  // Owl Carousel
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />

      {display ? (
        <OwlCarousel
          className="home-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="main-banner-item item-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <h1>DECENTALIZED SOCIAL</h1>
                    <p>
                      A revolutionary investment platform on a global scale,
                      providing real services. Open business data, transparency,
                      multiple benefits, big and definite benefits.
                    </p>

                    <div className="btn-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner-item item-bg2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <h1>TRADE BASED ON AI TECHNOLOGY</h1>
                    <p>
                      Real proof, that AI can provide the best solution for your
                      trading business data needs. SMART AI algorithm, so it can
                      identify business data sources and offer solutions.
                    </p>

                    <div className="btn-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner-item item-bg3">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-item-content">
                    <h1>UNLIMITED AFFILIATED SPACE</h1>
                    <p>
                      Social Network Business Model Farming Data Mining
                      Industry. Develop business between countries and
                      continents, our campaign media provides free tools.
                    </p>

                    <div className="btn-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default MainBanner;
