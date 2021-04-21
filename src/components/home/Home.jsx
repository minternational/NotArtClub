import React from "react";
import Subtitle from "./Subtitle";
import About from "./About";
import Manifesto from "./Manifesto";
import News from "./News";
import Highlights from "./Highlights";
import "./styles_home.css";

const Home = () => {
  return (
    <section id="home">
      <Subtitle />
      <About />
      <Manifesto />
      <News />
      <Highlights />
    </section>
  );
};

export default Home;
