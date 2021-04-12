import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="col-4">
        <p>Subscribe to our newsletter:</p>
        <input></input>
        <br />
        <button class="btn btn-dark">Subscribe</button>
      </div>
      <div class="col-4">
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
      <div class="col-4">
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
  );
};

export default Footer;
