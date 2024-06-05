import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAWKDXfxyiVv4pqvROU6h6A7QIs3qWS1Gk",
    authDomain: "e-ride-c87d1.firebaseapp.com",
    projectId: "e-ride-c87d1",
    storageBucket: "e-ride-c87d1.appspot.com",
    messagingSenderId: "349430443033",
    appId: "1:349430443033:web:472c014464a4fc9dee0e88"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
