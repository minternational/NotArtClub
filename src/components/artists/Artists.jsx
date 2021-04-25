import React from "react";
import "../../styles/general-styles.css";
import "./artists-styles.css";
import avatar from "../../images/artistavatar.jpg";

const Artists = () => {
  return (
    <section id="artists">
      <div className="row">
        <div className="col-lg-4 special-row">
          <img className="artist-avatar" src={avatar} alt="artist avatar"></img>
          <h2>Angie Mathot</h2>
          <h3 className="foo">
            <i>Vector Artist / Graphic Designer</i>
          </h3>
          <h4>www.designbyangie.com</h4>
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
        <div className="col-lg-4">
          <h3>
            <i>Biography</i>
          </h3>
          <p>
            Biography Angie is a graphic designer from Belgium, who’s always had
            a passion for drawing and illustration. From an early age, she has
            displayed a keen interest in fine arts and design and made a choice
            to pursue the artistic route as a career. She graduated from the
            Saint-Luc School of Fine Arts in Liège in 2004 and has, over the
            years, developed her graphic design gig & style.
            <br />
            <br />
            The road hasn’t been an easy one, in a saturated design market and
            for a long time, her design passion was a part time activity aside
            an exhausting full-time job. During the first lockdowns in 2020,
            Angie started exploring more in depth what she truly wanted to do
            with her life and did some soul searching. She recently took the
            plunge to live from her art & design, and is striving as an artist
            right now.
            <br />
            <br />
            She currently lives in the Netherlands, together with her cat Momo,
            where she focuses on graphic design and vector art, and more
            recently the creation and sale of NFT’s.
          </p>
        </div>
        <div className="col-lg-4">
          <h3>
            <i>Story behind the piece</i>
          </h3>
          <p>
            “As a vector artist, I love minimalism very much, because it is my
            style, together with some geometry. I love landscapes and warm
            colours that are reminiscent of holidays in faraway places, they
            have something comforting. These colours come very close somehow to
            what we picture when we think about the rich and famous: beaches,
            palmtrees, cocktails, the sea and the good, worryless life.
            <br />
            <br />I couldn’t help but draw the parallel, and I believe my
            soothing landscapes are somewhat very appropriate for representing
            this project.
            <br />
            <br />
            Having money these days is all about not having to worry, having a
            stable life, investing, putting your mind to rest, security. I
            believe many of us aspire to that and are ready to work hard for it.
            A hundred dollars bill is very symbolic, that money doesn’t buy you
            much anymore today where I live, though for some of my fellow
            artists, it means so much more. What is money in the end ? All I can
            say is I gotta work hard for my place in the sun.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Artists;
