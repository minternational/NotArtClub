import React, { useState, useEffect } from "react";
import "../../styles/general-styles.css";
import "./artists-styles.css";
/* import avatar from "../../images/artistavatar.jpg"; */
import firebase from "./firebase";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("artists").get();
      setArtists(data.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <section id="artists">
      <ul className="col-lg-12 parent-row">
        {artists.map(artist => (
          <div className="row artists-row">
            <div className="col-lg-12 special-row">
              {console.log(artist.avatar)}
              <img
                className="artist-avatar"
                src={artist.avatar}
                alt="artist avatar"></img>
              <p>{artist.name}</p>
              <p className="foo">
                <i>{artist.title}</i>
              </p>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
/* <div>
      <div>
        {artists.map(artist => (
          <img src={artist.avatar}>{console.log({ artist })}</img>
        ))}
      </div>
      <ul>
        {artists.map(artist => (
          <div>
            <li key={artist.name}>{artist.name}</li>
            <li key={artist.title}>{artist.title}</li>
            <li key={artist.web}>{artist.web}</li>
            <li key={artist.social}>{artist.social}</li>
            {/*             <li key={artist.social.twitter}>{artist.social.twitter}</li>
            <li key={artist.social.facebook}>{artist.social.facebook}</li>
            <li key={artist.social.instagram}>{artist.social.instagram}</li>
            <li key={artist.social.reddit}>{artist.social.reddit}</li>
            <li key={artist.social.discord}>{artist.social.discord}</li>
            <li key={artist.bio}>{artist.bio}</li>
          </div>
        ))}
      </ul>
    </div>

<section id="artists">
  {artists.map(artist => (
    <div className="row artists-row">
      <div className="col-lg-4 special-row">
        {console.log(artist.avatar)}
        <img
          className="artist-avatar"
          src={artist.avatar}
          alt="artist avatar"></img>
        <h2>{artist.name}</h2>
        <h3 className="foo">
          <i>{artist.title}</i>
        </h3>
        <h4>{artist.web}</h4>
        <div className="col-lg-12 col-sm-12 column">
          <br />
          <a
            href="mailto:info@notartclub.com"
            target="_blank"
            rel="noopener noreferrer">
            <i className="far fa-envelope fa-2x footer-icons"></i>
          </a>
          <a
            href="https://twitter.com/NotArtClub"
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
      </div>
      <div className="col-lg-8">
        <h3>
          <i>Biography</i>
        </h3>
        <p>{artist.bio}</p>
      </div>
    </div>
  ))}
</section>; */

export default Artists;
