import firebase from "firebase";

var config = {
  apiKey: process.env.REACT_APP_FBAPIKEY,
  authDomain: "bjj-journal-c7c89.firebaseapp.com",
  databaseURL: "https://bjj-journal-c7c89.firebaseio.com",
  projectId: "bjj-journal-c7c89",
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_MSGSENDERID
};
const fire = firebase.initializeApp(config);

export default fire;
