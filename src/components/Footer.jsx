import React from "react";
/* import logo from "../images/logo_footer.png"; */
import { Link } from "react-router-dom";
import "../styles/general-styles.css";
import "./main-styles.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="row">
        {/* SUBSCRIPTION */}
        <div
          id="mc_embed_signup"
          className="footer-row col-lg-3 col-md-6 col-sm-12 col-md-6 col-sm-12">
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
              <p id="handle-data-secure-p">
                We handle your data secure and will never sell it to anyone.
              </p>
              <br />
              <br />
              <div className="clear">
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="btn btn-sm"></input>
              </div>
            </div>
          </form>
        </div>
        {/* SITE MAP */}
        <div className="footer-row col-lg-3 col-md-6 col-sm-12">
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
        {/* SOCIAL MEDIA */}
        <div className="footer-row col-lg-3 col-md-6 col-sm-12">
          <h6>Social Media</h6>
          <a
            href="mailto:info@notartclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="far fa-envelope footer-icons"></i> E-Mail
            </li>
          </a>
          <a
            href="https://twitter.com/NotArtClub"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-twitter footer-icons"></i> Twitter
            </li>
          </a>
          <a
            href="https://www.facebook.com/groups/889324268527278/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-facebook-f footer-icons"></i> Facebook
            </li>
          </a>
          <a
            href="https://www.instagram.com/not.art.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-instagram footer-icons"></i> Instagram
            </li>
          </a>
          <a
            href="https://www.reddit.com/r/NotArtClub/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-reddit footer-icons"></i> Reddit
            </li>
          </a>
          <a
            href="https://discord.gg/cXvjc2qJyj"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-discord footer-icons"></i> Discord
            </li>
          </a>
        </div>
        {/* LEGAL */}
        <div className="footer-row col-lg-3 col-md-6 col-sm-12">
          <h6>Legal</h6>
          <Link className="footer-link" to="/">
            <li>Terms & Conditions</li>
          </Link>
          <Link className="footer-link" to="/">
            <li>Privacy Policy</li>
          </Link>
          <Link className="footer-link" to="/">
            <li>Other</li>
          </Link>
        </div>
      </div>
      {/* <small>Copyright by Angie Mathot & Christopher Kühn 2021</small> */}
    </section>
  );
};

export default Footer;
