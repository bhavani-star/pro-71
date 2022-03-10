import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDnWQapJuCciOcgPTSxPZ56snCvTNiCBh8",
    authDomain: "complaint-forum-36fc0.firebaseapp.com",
    projectId: "complaint-forum-36fc0",
    storageBucket: "complaint-forum-36fc0.appspot.com",
    messagingSenderId: "495828620725",
    appId: "1:495828620725:web:7a863d1e30909456b175fc"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
