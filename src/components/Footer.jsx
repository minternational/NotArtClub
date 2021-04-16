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
            <h6>Site map</h6>
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
              <a href="localhost:3000">
                <i className="fas fa-envelope fa-2x sm-icons"></i>
              </a>
              <a href="localhost:3000">
                <i className="fab fa-twitter fa-2x sm-icons"></i>
              </a>
              <a href="localhost:3000">
                <i className="fab fa-facebook-f fa-2x sm-icons"></i>
              </a>
              <a href="localhost:3000">
                <i className="fab fa-instagram fa-2x sm-icons"></i>
              </a>
              <a href="localhost:3000">
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

/*

<div>
      <div className="col-4">
        <p>Subscribe to our newsletter:</p>
        <input></input>
        <br />
        <button className="btn btn-dark">Subscribe</button>
      </div>
      <div className="col-4">
        <h5>Site map</h5>
        <ul>
          <li>News</li>
          <li>The Project</li>
          <li>Blah Link</li>
          <li>Blahblah Link</li>
          <li>Some Other Link</li>
          <li>The Artists</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="col-4">
        <h5>Legal</h5>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Other</li>
          <li>.</li>
          <li>Social Media</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Reddit</li>
        </ul>
      </div>
    </div>

*/
