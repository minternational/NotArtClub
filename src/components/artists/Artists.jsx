import React, { useState, useEffect } from "react";
import "../../styles/general-styles.css";
import "./artists-styles.css";
/* import avatar from "../../images/artistavatar.jpg"; */
import firebase from "./firebase";

const Artists = () => {
  const imgStyle = {
    width: "150px",
    border: "1.5px solid lightgray",
    borderRadius: "50%",
    margin: "1rem auto 1rem",
  };

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("artists").get();
      console.log(data);
      setArtists(
        data.docs.map(doc => {
          console.log(doc.id);
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <section id="artists">
      {artists.map(artist => (
        <React.Fragment key={artist.id}>
          {/* <div className="d-flex flex-row" key={artist.id}> */}
          <div
            className="col-lg-2"
            style={{
              minWidth: "250px",
              display: "inline-block",
            }}>
            <img
              style={imgStyle}
              src={artist.avatar}
              alt="avatar"
              type="button"
              onClick={console.log("I am clicked!")}
              data-toggle="modal"
              data-target={`#${artist.id}`}></img>
            <p>{artist.name}</p>
            <p>{artist.title}</p>
          </div>
          <div
            className="modal fade"
            id={artist.id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="artistModalTitle"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
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
                <img style={imgStyle} src={artist.avatar} alt="avatar"></img>
                <div className="modal-body">
                  <div>{artist.bio}</div>
                  <br />
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
                    href="https://www.facebook.com/groups/889324268527278/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook-f fa-2x footer-icons"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/not.art.club/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x footer-icons"></i>
                  </a>
                  <a
                    href="https://www.reddit.com/r/NotArtClub/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-reddit fa-2x footer-icons"></i>
                  </a>
                </div>

                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Artists;
