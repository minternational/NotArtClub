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
              Not Art Club is a group of international artists with a mosaic of
              opinions, influences and cultures working together to create a
              safe and inclusive community for all. During a time when ownership
              and art are seeing a renaissance of new meaning, we share
              knowledge and opportunities to help each other grow and succeed.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 manifesto-content column">
            <p>
              In light and despite of political, religious, philosophical and
              other differences, Not Art Club unites through art to forge a path
              towards the realization of our dreams.
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
