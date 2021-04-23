import React from "react";
import Subtitle from "./Subtitle";
import About from "./About";
import Manifesto from "./Manifesto";
import Recentnews from "./Recentnews";
import Highlights from "./Highlights";
import "../../styles/general-styles.css";
import "./home-styles.css";

const Home = () => {
  return (
    <section id="home">
      <Subtitle />
      <About />
      <Manifesto />
      <Recentnews />
      <Highlights />
    </section>
  );
};

export default Home;
