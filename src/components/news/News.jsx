import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "./news-styles.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("news").get();
      /* console.log(data); */
      setNews(
        data.docs.map(doc => {
          /* console.log(doc.id); */
          return { ...doc.data(), id: doc.id };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <section id="news-section">
      <div className="container-fluid">
        <h2>News & Articles</h2>
        <hr id="recent-news-hr" />
        <React.Fragment>
          {news.map(entry => (
            <React.Fragment key={entry.id}>
              <div className="row">
                <div className="col-lg-12">
                  <h3 id="recent-news-h3">{entry.title}</h3>
                </div>
                <div className="col-lg-12">
                  <img
                    id="recent-news-img"
                    src={entry.image}
                    alt="recent-news-img"></img>

                  <p
                    className="recent-news-paragraph"
                    dangerouslySetInnerHTML={{ __html: entry.content }}></p>
                </div>
                <hr id="recent-news-hr" />
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      </div>
      <br />
      <br />
    </section>
  );
};

export default News;
