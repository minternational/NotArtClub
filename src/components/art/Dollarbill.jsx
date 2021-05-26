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

  /*const scaleUp = e => {
    /*const imageSource = e.target.src;
    console.log(imageSource);
    imageSource.replace(/low/g, "high");
    const scaleImage = document.getElementById("pieceImage");
    scaleImage.style.transition = ".3s ease-in-out";
    console.log(scaleImage);
    scaleImage.style.transform = "scale(5)";
    let element2 = document.getElementById("body");
    element2.style.transition = ".3s ease-in-out";
    element2.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
  };

  const scaleNormal = e => {
    /*     const source = e.target.src;
    source.replace("high", "low");
    const scaleImage = document.getElementById("pieceImage");
    console.log(scaleImage);
    scaleImage.style.transform = "scale(1)";
    let element2 = document.getElementById("body");
    element2.style.transition = ".3s ease-in-out";
    element2.style.backgroundColor = "rgba(255, 255, 255, 1)";
  };*/

  const handleClick = e => {
    const attribute = document.getElementById("pieceRow").getAttribute("id");
    if (attribute === "pieceRow") {
      document.getElementById("pieceRow").setAttribute("id", "visible");
      const element = document.getElementById("button");
      element.style.transition = "1s";
      element.parentNode.removeChild(element);
      return false;
    }
  };

  return (
    <section id="dollarbill">
      <button id="button" className="btn buttonReveal" onClick={handleClick}>
        Discover our final piece in full glance - Click here
      </button>
      <div id="pieceRow" className="container-fluid">
        {dollarbill.map(piece => (
          <div key={piece.id} id="pieceStyle">
            {piece.high_res.endsWith(".jpg") && (
              <img
                /*onMouseOver={scaleUp}
                onMouseOut={scaleNormal}*/
                id="pieceImage"
                className="piece"
                src={piece.low_res}
                alt="piece"></img>
            )}
            {piece.high_res.endsWith(".gif") && (
              <img
                id="pieceImage"
                className="piece"
                src={piece.low_res}
                alt="piece"></img>
              /*<video id="pieceVideo" className="piece" loop muted autoPlay>
                <source src={piece.low_res} type="video/mp4"></source>
              </video> */
            )}
          </div>
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
