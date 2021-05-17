import React from "react";
import "../../styles/general-styles.css";
import "./art-styles.css";
import piece01 from "../../images/art009sm.jpg";
import piece02 from "../../images/art020sm.jpg";
import piece03 from "../../images/art034sm.jpg";
import piece04 from "../../images/art037sm.jpg";
import piece01big from "../../images/art009.jpg";

const Dollarbill = () => {
  const scaleUp = () => {
    const element = document.getElementById("pieceScale");
    element.style.position = "relative";
    element.style.zIndex = "2";
    element.style.transition = ".3s ease-in-out";
    element.setAttribute("src", `${piece01big}`);
    element.style.width = "200%";
    const element2 = document.getElementById("body");
    element2.style.transition = ".3s ease-in-out";
    element2.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  };

  const scaleNormal = () => {
    const element = document.getElementById("pieceScale");
    element.setAttribute("src", `${piece01}`);
    element.style.width = "";
    const element2 = document.getElementById("body");
    element2.style.backgroundColor = "rgba(255, 255, 255, 1)";
  };

  return (
    <section id="dollarbill">
      <div className="row">
        <div className="col-lg-6">
          <img
            onMouseOver={scaleUp}
            onMouseOut={scaleNormal}
            id="pieceScale"
            className="piece"
            src={piece01}
            alt="piece"></img>
        </div>
        <div className="col-lg-6">
          <img
            onMouseOver={scaleUp}
            onMouseOut={scaleNormal}
            id="pieceScale"
            className="piece"
            src={piece02}
            alt="piece"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img
            onMouseOver={scaleUp}
            onMouseOut={scaleNormal}
            id="pieceScale"
            className="piece"
            src={piece03}
            alt="piece"></img>
        </div>
        <div className="col-lg-6">
          <img
            onMouseOver={scaleUp}
            onMouseOut={scaleNormal}
            id="pieceScale"
            className="piece"
            src={piece04}
            alt="piece"></img>
        </div>
      </div>
    </section>
  );
};

export default Dollarbill;
