import React from "react";

const Video = () => {
  return (
    <section id="video">
      <iframe
        width="100%"
        height="720px"
        src="https://www.youtube.com/embed/mSgwr7DP8Po"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </section>
  );
};

export default Video;
