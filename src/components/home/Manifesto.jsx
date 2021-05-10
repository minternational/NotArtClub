import React from "react";
import "../../styles/general-styles.css";
import "./home-styles.css";

const Manifesto = () => {
  return (
    <section id="manifesto">
      <h1 className="manifesto-title">Mission Statement of NAC</h1>
      <div id="manifesto-row" className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-12 manifesto-content column">
            <p>
              NAC is a group of international artists coming together NOW in a
              new decentralized way. During a time when ownership and art are
              seeing a renaissance of new meaning, NAC artists aim to share
              knowledge, globally shape the new marketplace, and form a safe and
              inclusive community, at a time of great shift.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 manifesto-content column">
            <p>
              Our members have global perspective that will always reflect the
              world we live in as a WHOLE, by orchestrating meaningful art
              projects internationally.
            </p>
            <br />
            <br />
          </div>
          <div className="col-lg-4 col-sm-12 manifesto-content column">
            <h1>“Coming together now”</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
