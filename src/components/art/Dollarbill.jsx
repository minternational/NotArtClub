import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import logo from "../../images/logo.png";
import "../../styles/general-styles.css";
import "./art-styles.css";

const Dollarbill = () => {
  const [dollarbill, setDollarbill] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("dollarbill").get();
      /* console.log(data);*/
      setDollarbill(
        data.docs.map(doc => {
          /* console.log(doc.id);*/
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  const scaleUp = () => {
    let getBodyElement = document.getElementById("body");
    getBodyElement.style.transition = ".6s ease-in";
    getBodyElement.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  };

  const scaleNormal = () => {
    let getBodyElement = document.getElementById("body");
    getBodyElement.style.transition = ".3s ease-in";
    getBodyElement.style.backgroundColor = "rgba(255, 255, 255, 1)";
  };

  /*   const handleClick = e => {
    const attribute = document.getElementById("pieceRow").getAttribute("id");
    if (attribute === "pieceRow") {
      document.getElementById("pieceRow").setAttribute("id", "visible");
      const element = document.getElementById("button");

      element.parentNode.removeChild(element);
      element.style.transition = "1s";
      return false;
    }
  }; */

  return (
    <section id="dollarbill">
      <h1 className="interactive_header">
        The <img className="nac_logo" src={logo} alt="nac logo"></img>{" "}
        interactive gallery.
      </h1>
      <div id="pieceRow" className="row">
        {dollarbill.map(piece => (
          <React.Fragment key={piece.id}>
            <div id="pieceStyle">
              {piece.low_res.endsWith(".jpg") && (
                <a
                  href="_"
                  className="modalToggle"
                  data-toggle="modal"
                  data-target={`.${piece.id}-modal-lg`}>
                  <img
                    onMouseOver={scaleUp}
                    onMouseOut={scaleNormal}
                    className="piece"
                    id="pieceImage"
                    src={piece.low_res}
                    alt="piece"></img>
                </a>
              )}
              {piece.gif && (
                <a
                  href="_"
                  className="modalToggle"
                  data-toggle="modal"
                  data-target={`.${piece.id}-modal-lg`}>
                  <img
                    onMouseOver={scaleUp}
                    onMouseOut={scaleNormal}
                    className="piece"
                    id="pieceImage"
                    src={piece.gif}
                    alt="piece"></img>
                </a>
              )}
              <div
                key={piece.id}
                className={`modal fade ${piece.id}-modal-lg`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="largeModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg ">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalLongTitle">
                        {piece.name}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    {piece.low_res.endsWith(".jpg") && (
                      <img
                        loading="lazy"
                        id="imagePiece"
                        src={piece.high_res}
                        alt="piece fullsize"></img>
                    )}
                    {piece.low_res.endsWith(".mp4") && (
                      <video
                        preload="none"
                        id="videoPiece"
                        alt="piece fullsize"
                        autoPlay
                        controls
                        muted
                        loop>
                        <source src={piece.high_res} type="video/mp4"></source>
                      </video>
                    )}
                    <div className="modal-footer pieceFooter">
                      <p>{piece.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Dollarbill;
