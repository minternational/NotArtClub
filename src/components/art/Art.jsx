import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import Content from "./Content";
import Dollarbill from "./Dollarbill";
import Footer from "../Footer";
import "./styles_art.css";

const Art = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Content />
      <Dollarbill />
      <Footer />
    </div>
  );
};

export default Art;
