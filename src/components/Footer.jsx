import React from "react";
import logo from "../images/logo_footer.png";
import "../styles/styles.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div id="footer-row" className="row">
          <div className="col-sm-6">
            <img id="footer-logo" src={logo} alt="not-art-club-logo"></img>
            <br />
            <label>Subscribe to our newsletter:</label>
            <br />
            <input
              type="input"
              className="input"
              placeholder="Type in your E-Mail"></input>
            <br />
            <br />
            <button className="btn btn-sm btn-dark subscribe-btn">
              Subscribe
            </button>
          </div>
          <div className="col-lg-3 col-sm-12">
            <h6 id="site-map">Site map</h6>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              News
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              The Project
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              Blah Link
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              Blahblah Link
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              Some Other Link
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              The Artists
            </a>
            <br />
            <a className="footer-anchor" href="localhost:3000">
              Contact
            </a>
          </div>
          <div className="d-flex flex-column col-lg-3 col-sm-12">
            <div className="col-lg-12 col-12 p-2">
              <h6>Legal</h6>
              <br />
              <a className="footer-anchor" href="localhost:3000">
                Terms & Conditions
              </a>
              <br />
              <a className="footer-anchor" href="localhost:3000">
                Privacy Policy
              </a>
              <br />
              <a className="footer-anchor" href="localhost:3000">
                Other
              </a>
              <br />
              <br />
            </div>
            <div className="col-12 p-2">
              <h6>Social Media</h6>
              <br />
              <a
                href="mailto:info@notartclub.com"
                target="_blank"
                rel="noreferrer">
                <i className="far fa-envelope fa-2x sm-icons"></i>
              </a>
              <a
                href="https://twitter.com/NotArtClub"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-twitter fa-2x sm-icons"></i>
              </a>
              <a
                href="https://www.facebook.com/groups/889324268527278/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-facebook-f fa-2x sm-icons"></i>
              </a>
              <a
                href="https://www.instagram.com/not.art.club/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-instagram fa-2x sm-icons"></i>
              </a>
              <a
                href="https://www.reddit.com/r/NotArtClub/"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-reddit fa-2x sm-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;