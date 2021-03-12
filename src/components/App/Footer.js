import React from "react";
import { Link } from "gatsby";
import logo from "../../assets/images/RF1.png";
import footerMap from "../../assets/images/footer-map.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
              <p>
                We believe in the future of blockchain in cryptocurrency trading
                as an asset of the future. so we aspire to optimize
                industry-wide solutions through innovation for the future
                current generation and help improve the quality of life through
                the platform opportunities we build. Rich Farm provides returns
                on investment that pay off in a transparent, fair and open
                manner. this commitment is for the good of everyone.
              </p>

              <ul className="social-link"></ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-4">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://dogechain.info/">Dogechain</Link>
                </li>
                <li>
                  <Link to="https://tronscan.org/#/">Tronchain</Link>
                </li>

                <li>
                  <Link to="https://bscscan.com/">Binancechain</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-4 col-4">
          <div className="single-footer-widget">
            <ul className="footer-contact-info"></ul>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Richfarms</strong> All rights
                reserved{" "}
                <a
                  target="_blank"
                  href="https://envytheme.com/"
                  rel="noreferrer"
                ></a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
