import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="artistModal"
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
            <a href={artist.twitter} target="_blank" rel="noopener noreferrer">
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
  );
};

export default Modal;
