import React from "react";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 column">
            <h2>Highlights: Artist Name</h2>
            <h3 id="news-h3">Some catchy subtitle on artist</h3>
            <p className="highlight-content">
              Small paragraphs of text, only a few sentences each time.
              Interesting things to read. Blah blah. Small paragraph of text.
              Blah blablah. Blah. Interesting things to read. Blah blah. Small
              paragraph of text H3 Some catchy subtitle on artist.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link className="react-link" to="/highlights">
              <h5>
                Read more <i className="fas fa-long-arrow-alt-right"></i>
              </h5>
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 column news-img">
            <img src="https://picsum.photos/740/450" alt="highlight"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
