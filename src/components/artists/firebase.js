// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
/* // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use*/
/* import "firebase/auth"; */
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyB3GDATYf6Ghbcs4f_12I_62S6YsTWf3S4",
  authDomain: "notartclub-31220.firebaseapp.com",
  projectId: "notartclub-31220",
  storageBucket: "notartclub-31220.appspot.com",
  messagingSenderId: "27027073498",
  appId: "1:27027073498:web:60a1041e8c0b1cdae3b8e3",
  measurementId: "G-ER1FJFTH8V",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
