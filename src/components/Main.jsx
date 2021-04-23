import React from "react";
import Subtitle from "./landing/Subtitle";
import About from "./landing/About";
import Manifesto from "./landing/Manifesto";
import RecentNews from "./landing/RecentNews";
import Highlights from "./landing/Highlights";

const Main = () => {
  return (
    <section>
      <Subtitle />
      <About />
      <Manifesto />
      <RecentNews />
      <Highlights />
    </section>
  );
};

export default Main;
