import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "../../styles/general-styles.css";
import "./art-styles.css";

const Dollarbill = () => {
  const [dollarbill, setDollarbill] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("dollarbill").get();
      /* console.log(data); */
      setDollarbill(
        data.docs.map(doc => {
          /* console.log(doc.id); */
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

  const handleClick = e => {
    const attribute = document.getElementById("pieceRow").getAttribute("id");
    if (attribute === "pieceRow") {
      document.getElementById("pieceRow").setAttribute("id", "visible");
      const element = document.getElementById("button");

      element.parentNode.removeChild(element);
      element.style.transition = "1s";
      return false;
    }
  };

  return (
    <section id="dollarbill">
      {/*       <button id="button" className="btn buttonReveal" onClick={handleClick}>
        Discover our final piece in full glance - Click here
      </button> */}
      <div id="pieceRow" className="container-fluid">
        {dollarbill.map(piece => (
          <React.Fragment>
            <div key={piece.id} id="pieceStyle">
              {piece.high_res.endsWith(".jpg") && (
                <a
                  href="_"
                  className="modalToggle"
                  data-toggle="modal"
                  data-target={`#${piece.id}`}>
                  <img
                    onMouseOver={scaleUp}
                    onMouseOut={scaleNormal}
                    className="piece"
                    id="pieceImage"
                    src={piece.low_res}
                    alt="piece"></img>
                </a>
              )}
              {piece.high_res.endsWith(".mp4") && (
                /*<img
                  id="pieceImage"
                  className="piece"
                  src={piece.low_res}
                  alt="piece"></img> */
                <video
                  id="pieceVideo"
                  className="piece"
                  loop
                  muted
                  autoPlay
                  onMouseOver={scaleUp}
                  onMouseOut={scaleNormal}>
                  <source src={piece.low_res} type="video/mp4"></source>
                </video>
              )}
            </div>
            <div
              className="modal fade"
              id={piece.id}
              tabIndex="-1"
              role="dialog"
              aria-labelledby="pieceModalTitle"
              aria-hidden="true">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLongTitle">
                      {piece.id}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img
                    id="modalPiece"
                    src={piece.high_res}
                    alt="piece fullsize"></img>
                  <div className="modal-body">
                    <div dangerouslySetInnerHTML={{ __html: piece.bio }}></div>
                    <br />
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

/*

        const attribute = document.getElementById("pieceRow").getAttribute("id");
    if (attribute === "pieceRow") {
      document.getElementById("pieceRow").setAttribute("id", "visible");
    } else if (attribute === "visible") {
      document.getElementById("visible").setAttribute("id", "pieceRow");
    } 

  element.style.transition = ".3s ease-in-out";
  element.style.transform = "scale(5)";
  let element2 = document.getElementById("body");
  element2.style.transition = ".3s ease-in-out";
  element2.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
*/
