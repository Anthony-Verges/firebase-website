import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
require("dotenv").config();
//Conif project firebase
const firebaseConfig = {
  apiKey: "AIzaSyCih6p_ARs4fgin0owXmnQtGtPPQSzWSiI",
  authDomain: "fir-website-14a89.firebaseapp.com",
  projectId: "fir-website-14a89",
  storageBucket: "fir-website-14a89.appspot.com",
  messagingSenderId: "316015968794",
  appId: "1:316015968794:web:8f738e54a4e12753e187a3",
  measurementId: "G-PBTG0RD3TK",
};
//Init Firebase in project
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

// apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,

//.env
// apiKey = "AIzaSyCih6p_ARs4fgin0owXmnQtGtPPQSzWSiI"
// authDomain = "fir-website-14a89.firebaseapp.com"
// projectId = "fir-website-14a89"
// storageBucket =  "fir-website-14a89.appspot.com"
// messagingSenderId = "316015968794"
// appId= "1:316015968794:web:8f738e54a4e12753e187a3"
// measurementId= "G-PBTG0RD3TK"
