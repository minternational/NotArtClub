import React from "react";
import "../../styles/general-styles.css";
import "./news-styles.css";
import Recentnews from "../home/Recentnews";

const News = () => {
  return (
    <section id="news">
      <Recentnews />
      <Recentnews />
      <Recentnews />
      <Recentnews />
    </section>
  );
};

export default News;
