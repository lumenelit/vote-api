// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoDDZIVxPLR2Rzc6IbGzEzyJ85BCqSJk",
  authDomain: "uk-voteapp.firebaseapp.com",
  projectId: "uk-voteapp",
  storageBucket: "uk-voteapp.appspot.com",
  messagingSenderId: "259241677135",
  appId: "1:259241677135:web:8513d238712c2ff989b53a",
  measurementId: "G-CZT9LWFW6F"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;
