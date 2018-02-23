// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiKC_zZNq1h7o_j0Jwixnq2irUN5CX7ww",
    authDomain: "rosemusictrainnentserv.firebaseapp.com",
    databaseURL: "https://rosemusictrainnentserv.firebaseio.com",
    projectId: "rosemusictrainnentserv",
    storageBucket: "",
    messagingSenderId: "355228661198"
  };
firebase.initializeApp(config);

export default firebase;