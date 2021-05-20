import React from "react";
/* import logo from "../images/logo_footer.png"; */
import { Link } from "react-router-dom";
import "../styles/general-styles.css";
import "./main-styles.css";
import PrivacyPolicy from "./legal/PrivacyPolicy";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="row">
        {/* SUBSCRIPTION */}
        <div
          id="mc_embed_signup"
          className="footer-row col-lg-4 col-md-6 col-sm-12">
          <form
            action="https://notartclub.us1.list-manage.com/subscribe/post?u=601bd69f69ec73ad240ec9435&amp;id=b5d78cef6f"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate>
            <div id="mc_embed_signup_scroll">
              <h6 className="subscribe">
                Sign up to be FIRST in line for updates about our genesis NFT
                project!
              </h6>
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
        {/* SOCIAL MEDIA */}
        <div className="footer-row col-lg-4 col-md-6 col-sm-12">
          <h6>Social Media</h6>
          <a
            href="mailto:lil@notart.club"
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
            href="https://www.youtube.com/channel/UCfpUG7CI4SX2lUJ1vcr59mQ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link">
            <li>
              <i className="fab fa-youtube footer-icons"></i> YouTube
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
        {/* SITE MAP & LEGAL */}
        <div className="footer-row col-lg-4 col-md-6 col-sm-12">
          <h6 id="site-map">Site Map & Legal</h6>
          <Link className="footer-link" to="/news">
            <li>News</li>
          </Link>
          <Link className="footer-link" to="/art">
            <li>The Project</li>
          </Link>
          <Link className="footer-link" to="/artists">
            <li>The Artists</li>
          </Link>
          <li
            className="footer-link"
            data-toggle="modal"
            data-target=".bd-example-modal-lg">
            Privacy Policy
          </li>

          <div
            className="modal fade bd-example-modal-lg"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <PrivacyPolicy />
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        Copyright by Not Art Club ™ (Angie Mathot (Design) & Christopher Kühn
        (Code)) © {getYear}
      </small>
    </section>
  );
};

export default Footer;
