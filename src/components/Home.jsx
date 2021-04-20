import React from "react";
import Subtitle from "./landing/Subtitle";
import About from "./landing/About";
import Manifesto from "./landing/Manifesto";
import News from "./landing/News";
import Highlights from "./landing/Highlights";

const Home = () => {
  return (
    <section>
      <Subtitle />
      <About />
      <Manifesto />
      <News />
      <Highlights />
    </section>
  );
};

export default Home;
