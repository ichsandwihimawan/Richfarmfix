import React from "react";

import StarIcon from "../../assets/images/star-icon.png";
import HowItsWork from "../../assets/images/how-its-work.png";

const HowItWork = () => {
  return (
    <section className="how-its-work-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-content">
              <span className="sub-title">
                <img src={StarIcon} alt="image" />
                ... OUR TECHNOLOGY ...
              </span>

              <p>
                Rich Farm is a One Stop Solution Platform, running on
                technology. digital, the revolutionary that makes it possible
                Our software works automatically in an easy, fast and safe way.
                Our team is also supported by experts to maintain the
                credibility of the developer and all investors' needs are met.
              </p>
              <div className="inner-box">
                <div className="single-item">
                  <div className="count-box">1</div>
                  <h3>BLOCKCHAIN</h3>
                  <p>
                    With this future technology we can provide transaction
                    journals openly to all members.
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">2</div>
                  <h3> ARTIFICIAL INTELLIGENCE</h3>
                  <p>
                    Our artificial intelligence technology is fully operational
                    to carry out every trading transaction on many trading
                    exchanges
                  </p>
                </div>
                <div className="single-item">
                  <div className="count-box">3</div>
                  <h3>MACHINE MINING DATA FARM</h3>
                  <p>
                    With the development of DEFI in many countries from various
                    continents, as well as the opening of many government
                    systems developed and developing countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="how-its-work-image">
              <img src={HowItsWork} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
