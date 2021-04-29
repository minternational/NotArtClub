import React from "react";
import firebase from "./firebase";
import "./artists-styles.css";

const db = firebase.firestore();

const form = document.querySelector("#add-artist-avatar");

/* db.settings({ timestampsInSnapshots: true }); */

function renderArtists(doc) {
  /* const artistsList = document.querySelector("#cafe-list");

  let li = document.createElement("li");
  let name = document.createElement("span");
  let title = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  title.textContent = doc.data().title;

  li.appendChild(name);
  li.appendChild(title);

  artistsList.appendChild(li); */

  const artistsAvatar = document.querySelector(".content");

  let image = document.createElement("img");

  image.setAttribute("src", doc.data().avatar);

  artistsAvatar.appendChild(image);
}

// getting data

db.collection("artists")
  .get()
  .then(snapshot => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
      renderArtists(doc);
    });
  });

// saving data

form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("artists").add({
    avatar: form.avatar.value,
  });
  form.name.value = "";
});

const Artists = () => {
  return (
    <div>
      <h1>Cloud Cafe</h1>
      <form id="add-artist-avatar">
        <input type="text" name="avatar" placeholder="Artists Avatar Link" />
        <button>Add Avatar</button>
      </form>
      <div className="content"></div>
    </div>
  );
};

export default Artists;
