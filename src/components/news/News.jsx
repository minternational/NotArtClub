import React, { useState, useEffect } from "react";
import firebase from "../artists/firebase";
import "./news-styles.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("news").get();
      console.log(data);
      setNews(
        data.docs.map(doc => {
          console.log(doc.id);
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <section id="news-section">
      <div className="container-fluid">
        <h2>Recent News</h2>
        <hr id="recent-news-hr" />
        {news.map(entry => (
          <div id="fetched-news">
            <h3 id="recent-news-h3">{entry.title}</h3>
            <div className="row">
              <div className="col-lg-4 col-sm-12 recent-news-img column">
                <img
                  id="recent-news-img"
                  src={entry.image}
                  alt="recent-news-img"></img>
              </div>
              <div className="col-lg-8 col-sm-12 column">
                <p className="recent-news-paragraph">{entry.content}</p>
              </div>
            </div>
            <br />
            <br />
            <hr id="recent-news-hr" />
          </div>
        ))}
      </div>
      <br />
      <br />
    </section>
  );
};

export default News;
