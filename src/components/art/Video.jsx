import React from "react";

const Video = () => {
  return (
    <section id="video">
      <h2>“The Last Bell" - Final Piece</h2>
      <iframe
        className="youtubeVideoFinalPiece"
        width="100%"
        height="630"
        src="https://www.youtube.com/embed/0Y9wCPFJ2Fg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <div className="row">
        <div className="col-lg-4 col-12">
          <h4>“The Last Bell" - Teaser 3</h4>
          <iframe
            className="youtubeVideo"
            width="100%"
            height="66%"
            src="https://www.youtube.com/embed/2Cdu0KNA3BY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="col-lg-4 col-12">
          <h4>“The Last Bell" - Teaser 2</h4>
          <iframe
            className="youtubeVideo"
            width="100%"
            height="66%"
            src="https://www.youtube.com/embed/pqVIyEMzbPI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="col-lg-4 col-12">
          <h4>“The Last Bell” - Teaser 1</h4>
          <iframe
            className="youtubeVideo"
            width="100%"
            height="66%"
            src="https://www.youtube.com/embed/8MT1bpeOEjc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
