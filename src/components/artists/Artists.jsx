import React, { useState, useEffect } from "react";
import "../../styles/general-styles.css";
import "./artists-styles.css";
import firebase from "../firebase";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("artists").get();
      /* console.log(data); */
      setArtists(
        data.docs.map(doc => {
          /* console.log(doc.id); */
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <section id="artists">
      <h1 className="title">Artists</h1>
      <div className="container-fluid">
        {artists.map(artist => (
          <React.Fragment key={artist.id}>
            <div className="card" style={{ width: "18rem" }}>
              <a
                href="_"
                className="modalToggle"
                data-toggle="modal"
                data-target={`#${artist.id}`}>
                <img
                  src={artist.avatar}
                  className="card-img-top"
                  alt="artist avatar"></img>

                <div className="card-body">
                  <h5 className="card-title">{artist.name}</h5>
                  <p className="card-text">{artist.title}</p>
                </div>
              </a>
            </div>
            <div
              className="modal fade"
              id={artist.id}
              tabIndex="-1"
              role="dialog"
              aria-labelledby="artistModalTitle"
              aria-hidden="true">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      {artist.name}
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
                    id="modalAvatar"
                    src={artist.avatar}
                    alt="artist avatar"></img>
                  <div className="modal-body">
                    <div dangerouslySetInnerHTML={{ __html: artist.bio }}></div>
                    <br />
                  </div>

                  <div className="modal-footer">
                    <a
                      href={"mailto:" + artist.mail}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="far fa-envelope fa-2x footer-icons"></i>
                    </a>
                    <a
                      href={artist.twitter}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-twitter fa-2x footer-icons"></i>
                    </a>
                    <a
                      href={artist.fb}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-facebook-f fa-2x footer-icons"></i>
                    </a>
                    <a
                      href={artist.insta}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-instagram fa-2x footer-icons"></i>
                    </a>
                    <a
                      href={artist.web}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i className="fas fa-globe fa-2x footer-icons"></i>
                    </a>
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

export default Artists;
