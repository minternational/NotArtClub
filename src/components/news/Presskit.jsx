import React from "react";
import "./news-styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/nac_logo_transparent.png";

const News = () => {
  return (
    <section id="news-section">
      <div className="row">
        {/*         <div className="col-lg-6 col-12">
          <iframe
            title="discord"
            src="https://discord.com/widget?id=826825619991691314&theme=light"
            width="100%"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div> */}
        <div className="col-12">
          <h2>Press Kit</h2>
          <hr id="recent-news-hr" />
          <React.Fragment>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Link className="text_links" to="/artists">
                  100 artists.
                </Link>{" "}
                From 35 different countries. Speaking 23 different languages.
                <br />
                <br />
                Through voting and collaboration, decided to burn a{" "}
                <Link className="text_links" to="/art">
                  US $100 bill
                </Link>{" "}
                as a thoughtful art piece that represents the voices of a global
                community.
                <br />
                <br />
                Offering up perhaps the most diverse selection of perspectives
                about world currency in history.
                <br />
                <br />
                Their goal? To transform this notorious symbol of wealth into
                100 Ethereum. Their reserve price? While writing this equals
                $284,600 in USD.
                <br />
                <br />
                The auction will take place 4 weeks following the reserve price
                bid.
                <br />
                <br />
                With the historic piece finally being put up for auction on June
                28th 2021 on{" "}
                <a
                  className="text_links"
                  href="https://foundation.app/@NotArtClub"
                  target="_blank"
                  rel="noopener noreferrer">
                  Foundation.app.
                </a>
                <br />
                <br />
                These artists are looking to the future.
                <img id="nac_logo" src={logo} alt="logo"></img>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <b>How did NAC organize this project?</b>
                <br />
                Organized by community governance on a discord chat server.
                Members were able to vote.
                <br />
                <br />
                <b>When did this NAC start?</b>
                <br />
                Joined together March 21st 2021 on discord, after a Twitter post
                inspired the collaboration idea of "The Last Bell".
                <br />
                <br />
                <b>Why did NAC</b>
                <br />
                start? To sell one NFT art piece, created by 100 people, in a
                mosaic style. Topic and picture and name was yet to be decided.
                Later decided through community governance and voting.
                <br />
                <br />
                <b>How voting worked.</b>
                <br />
                Members voted on important details such as:
                <br />
                <br />
                <ul>
                  <li>• Name of organization (Not Art Club)</li>
                  <br />
                  <li>• Mission statement (To help eachother)</li>
                  <br />
                  <li>
                    • Project concept (A Thoughtful perspective piece on the
                    concept of currency, which we are all affected by in some
                    way.)
                  </li>
                  <br />
                  <li>
                    • Final product ( US $100 bill as a symbol of wealth, to be
                    burned and reflected upon){" "}
                  </li>
                  <br />
                  <li>
                    • And the way it would be presented to the world. (One
                    audio, visual, animated experience created by all of us)
                  </li>
                </ul>
                <br />
                <b>What next for NAC?</b>
                <br />
                <ul>
                  <li>
                    • Not Art Club plans to grow into a company that continues
                    to mold the new emerging art market, and help eachother
                    succeed across borders and mediums.
                  </li>
                  <br />
                  <li>
                    • NAC has the unique ability to share global perspective of
                    artists at any given time. This will always be an asset to
                    our growing community, where voices can be heard.
                  </li>
                  <br />
                  <li>
                    • NAC is opening their previously private discord server to
                    the public. Soon fans, friends, collectors, press and anyone
                    interested to join may, may pop in to interact. Get involved
                    with Not Art Club!
                  </li>
                  <br />
                  <li>
                    • NAC is working to create learning and teaching
                    opportunities for artists and creators in the community.
                  </li>
                  <br />
                  <li>
                    NAC is also opening a very special merch store. That will
                    grow to highlight these NFT artists in ecommerce later this
                    year!
                  </li>
                </ul>
              </div>
            </div>
            <hr id="recent-news-hr" />
            <h2>Online Interviews</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <br />
                <br />
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/n9PyNEp654s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
                <p>Kenn Bosak Podast Interview</p>
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    </section>
  );
};

export default News;
