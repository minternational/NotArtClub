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

            {/* FOOTER */}
            <div id="mc_embed_signup">
              <form
                action="https://notartclub.us1.list-manage.com/subscribe/post?u=601bd69f69ec73ad240ec9435&amp;id=b5d78cef6f"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate>
                <div id="mc_embed_signup_scroll">
                  <h6 className="subscribe">Subscribe to our newsletter</h6>
                  <div className="mc-field-group">
                    <input
                      type="email"
                      defaultValue=""
                      name="EMAIL"
                      className="required email input"
                      placeholder="Your email (required)"
                      id="mce-EMAIL"></input>
                  </div>
                  <div className="mc-field-group">
                    <br />
                    <input
                      type="text"
                      defaultValue=""
                      name="FNAME"
                      className="input"
                      placeholder="Your name"
                      id="mce-FNAME"></input>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}></div>
                  </div>
                  <small>
                    We handle your data secure and will never
                    <br />
                    sell it to anyone.
                  </small>
                  <br />
                  <br />
                  <div className="clear">
                    <input
                      type="submit"
                      defaultValue="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button btn btn-sm"></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 column">
            <h6 id="site-map">Site map</h6>
            <Link className="footer-link" to="/news">
              <li>News</li>
            </Link>
            <Link className="footer-link" to="/art">
              <li>The Project</li>
            </Link>
            <Link className="footer-link" to="/artists">
              <li>The Artists</li>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-12 column">
            <div className="col-lg-12 col-sm-12 column">
              <h6>Legal</h6>
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
            <div className="col-lg-12 col-sm-12 column">
              <h6>Social Media</h6>
              <a
                href="mailto:info@notartclub.com"
                target="_blank"
                rel="noopener noreferrer">
                <i className="far fa-envelope fa-2x footer-icons"></i>
              </a>
              <a
                href="https://twitter.com/NotArtClub"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x footer-icons"></i>
              </a>
              <a
                href="https://www.facebook.com/groups/889324268527278/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-2x footer-icons"></i>
              </a>
              <a
                href="https://www.instagram.com/not.art.club/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x footer-icons"></i>
              </a>
              <a
                href="https://www.reddit.com/r/NotArtClub/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-reddit fa-2x footer-icons"></i>
              </a>
              <a
                href="https://discord.gg/cXvjc2qJyj"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-discord fa-2x footer-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
