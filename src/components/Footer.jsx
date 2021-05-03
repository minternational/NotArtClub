import React from "react";
/* import logo from "../images/logo_footer.png"; */
import { Link } from "react-router-dom";
import "../styles/general-styles.css";
import "./main-styles.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div id="footer-row" className="row">
          <div className="col-lg-6 col-sm-12 column">
            {/* <img id="logo" src={logo} alt="not-art-club-logo"></img> */}
            <h6>Social Media</h6>
            <br />
            <a
              href="mailto:info@notartclub.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="far fa-envelope fa-3x footer-icons"></i>
            </a>
            <a
              href="https://twitter.com/NotArtClub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-twitter fa-3x footer-icons"></i>
            </a>
            <a
              href="https://www.facebook.com/groups/889324268527278/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-3x footer-icons"></i>
            </a>
            <a
              href="https://www.instagram.com/not.art.club/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram fa-3x footer-icons"></i>
            </a>
            <a
              href="https://www.reddit.com/r/NotArtClub/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-reddit fa-3x footer-icons"></i>
            </a>
            <a
              href="https://discord.gg/cXvjc2qJyj"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-discord fa-3x footer-icons"></i>
            </a>
            {/* <br />
            <h6>Subscribe to our newsletter:</h6>
            <input
              type="input"
              className="input"
              placeholder="Your E-Mail adress"></input>
            <br />
            <small>
              We handle your data secure and will never sell it to anyone.
            </small>
            <br />
            <br />
            <button className="btn btn-lg">Subscribe</button> */}
          </div>
          <div className="col-lg-3 col-sm-12 column">
            <h6 id="site-map">Site map</h6>
            <br />
            <Link className="footer-link" to="/news">
              News
            </Link>
            <br />
            <Link className="footer-link" to="/dollarbill">
              The Project
            </Link>
            <br />
            <Link className="footer-link" to="/art">
              The Art
            </Link>
            <br />
            <Link className="footer-link" to="/artists">
              The Artists
            </Link>
            <br />
            <Link className="footer-link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="col-lg-3 col-sm-12 column">
            <div className="col-lg-12 col-sm-12 column">
              <h6>Legal</h6>
              <br />
              <Link className="footer-link" to="/">
                Terms & Conditions
              </Link>
              <br />
              <Link className="footer-link" to="/">
                Privacy Policy
              </Link>
              <br />
              <Link className="footer-link" to="/">
                Other
              </Link>
              <br />
              <br />
            </div>
            <div className="col-lg-12 col-sm-12 column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
