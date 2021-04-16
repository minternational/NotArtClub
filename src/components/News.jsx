import React from "react";
import picture from "../images/placeholder_recentnewssection.jpg";
import "../styles/styles.css";

const News = () => {
  const date = new Date();
  const getDay = date.getDate();
  const getMonth = date.getMonth();
  const getYear = date.getUTCFullYear();
  let month = "";

  switch (getMonth) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
  }

  return (
    <section id="news">
      <h2>Recent News</h2>
      <hr id="news-hr" />
      <h3 id="news-h3">
        {getDay}. {month} {getYear} - Title of Information
      </h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 news-img">
            <img id="news-img" src={picture} alt="news-img"></img>
          </div>
          <div className="col-lg-4">
            <p className="news-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="news-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h5>
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr id="news-hr" />
    </section>
  );
};

export default News;
